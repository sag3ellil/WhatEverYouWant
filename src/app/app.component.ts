import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet,RouterModule, Router } from '@angular/router';
import {CommonService} from './services/common.service'
import { AuthService } from './services/auth.service'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  authService:AuthService = inject(AuthService);
  commonService: CommonService = inject(CommonService);
  title = 'WhatEverYouWant';
  isConnected=false;
  dropdownOpen: boolean = false;

  constructor( private router: Router) {
    this.authService.isAuthenticated().subscribe(status => {
      this.isConnected = status;
    });
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    this.dropdownOpen = !this.dropdownOpen;
  }

  ngOnInit(): void {
    if(this.commonService.isConnected==true)
    this.isConnected=true
    else 
    this.isConnected=false
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/dashboard/login']);
    this.dropdownOpen = false; // Close dropdown on logout
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (this.dropdownOpen) {
      this.dropdownOpen = false; // Close the dropdown when clicking outside
    }
  }
}
