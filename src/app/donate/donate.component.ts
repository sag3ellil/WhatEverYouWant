import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonService} from '../services/common.service'
@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css',
})
export class DonateComponent implements OnInit {

  commonService: CommonService = inject(CommonService);
  cards: any[] = []; // Define the data structure for cards
  
  currentPage: number = 1;
  cardsPerPage: number = 10;
  constructor() { }
 isConnected:boolean = false;
  ngOnInit(): void {
    this.isConnected=this.commonService.isConnected
    // Fetch data for cards (e.g., from a service)
    // For demonstration purposes, let's assume some sample data
    this.cards = [
      {
        name: 'Object 1',
        imageUrl: 'path/to/image1.jpg',
        status: 'Active',
        phone:'151656',
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 2',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 3',
        imageUrl: 'path/to/image1.jpg',
        status: 'Active',
        phone:'151656',
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 4',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'Active',
        phone:'151656',
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 4',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'Active',
        phone:'151656',
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'Active',
        phone:'151656',
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'Active',
        phone:'151656',
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'Active',
        phone:'151656',
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      }, {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'Active',
        phone:'151656',
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'Active',
        phone:'151656',
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'Inactive',
        phone:'151656',
        location: 'Location 2',
        date: '15-05-2023'
      },
      // Add more objects as needed
    ];
  }

  get paginatedCards(): any[] {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    return this.cards.slice(startIndex, endIndex);
  }

  

  nextPage() {
    const totalPages = Math.ceil(this.cards.length / this.cardsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  donate(){
    
  }
}
