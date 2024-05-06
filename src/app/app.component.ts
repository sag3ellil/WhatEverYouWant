import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet,RouterModule } from '@angular/router';
import {CommonService} from './services/common.service'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 
  commonService: CommonService = inject(CommonService);
  title = 'WhatEverYouWant';
  isConnected=false;
  
  ngOnInit(): void {
    if(this.commonService.isConnected==true)
    this.isConnected=true
    else 
    this.isConnected=false
  }
}
