import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {CommonService} from '../services/common.service';

import { FormsModule,FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule,ReactiveFormsModule],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css'
})
export class SellComponent  implements OnInit {

  commonService: CommonService = inject(CommonService);

  constructor() { }

  isConnected:boolean =true;

  ngOnInit(): void {
    this.isConnected=this.commonService.isConnected
  }

  /*sellItem() {
    alert('Sell your item functionality goes here!');
  }*/

  itemName!: string;
  itemImage!: File;
  itemStatus!: string;
  itemPrice!: number;
  itemLocation!: string;
  itemDate!: string;

  onFileSelected(event: any) {
    this.itemImage = event.target.files[0];
  }

  sellItem() {
    // Logic to submit the form data, e.g., send it to a server
    const formData = new FormData();
    formData.append('name', this.itemName);
    formData.append('image', this.itemImage);
    formData.append('status', this.itemStatus);
    formData.append('price', this.itemPrice.toString());
    formData.append('location', this.itemLocation);
    formData.append('date-creation', this.itemDate);
    
    // Here you can send formData to your backend server using HTTP requests
    console.log(formData);
  }

}
