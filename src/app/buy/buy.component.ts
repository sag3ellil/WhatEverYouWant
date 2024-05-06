import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit {
  cards: any[] = []; // Define the data structure for cards
  
  currentPage: number = 1;
  cardsPerPage: number = 10;
  constructor() { }

  ngOnInit(): void {
    // Fetch data for cards (e.g., from a service)
    // For demonstration purposes, let's assume some sample data
    this.cards = [
      {
        name: 'Object 1',
        imageUrl: 'path/to/image1.jpg',
        status: 'New',
        price: 30,
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 2',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 3',
        imageUrl: 'path/to/image1.jpg',
        status: 'New',
        price: 30,
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 4',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'New',
        price: 30,
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 4',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'New',
        price: 30,
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'New',
        price: 30,
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'New',
        price: 30,
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'New',
        price: 30,
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
        location: 'Location 2',
        date: '15-05-2023'
      }, {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'New',
        price: 30,
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
        location: 'Location 2',
        date: '15-05-2023'
      },
      {
        name: 'Object 5',
        imageUrl: 'path/to/image1.jpg',
        status: 'New',
        price: 30,
        location: 'Location 1',
        date: '15-05-2023'
      },
      {
        name: 'Object 6',
        imageUrl: 'path/to/image2.jpg',
        status: 'New',
        price: 30,
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
}
