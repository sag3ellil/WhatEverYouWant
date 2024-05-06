import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css'
})
export class SellComponent  implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  sellItem() {
    alert('Sell your item functionality goes here!');
  }
}
