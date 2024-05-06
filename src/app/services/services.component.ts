import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  cards: any[] = []; // Define the data structure for cards
  
  currentPage: number = 1;
  cardsPerPage: number = 10;
  constructor() { }

  ngOnInit(): void {
    // Fetch data for cards (e.g., from a service)
    // For demonstration purposes, let's assume some sample data
    this.cards = [
      {
        name: 'Demenagement',
        imageUrl: 'path/to/image1.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 2',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 3',
        imageUrl: 'path/to/image1.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 4',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 5',
        imageUrl: 'path/to/image1.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 6',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 4',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 5',
        imageUrl: 'path/to/image1.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 6',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 5',
        imageUrl: 'path/to/image1.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 6',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 5',
        imageUrl: 'path/to/image1.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 6',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 5',
        imageUrl: 'path/to/image1.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 6',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      }, {
        name: 'Service 5',
        imageUrl: 'path/to/image1.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 6',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 5',
        imageUrl: 'path/to/image1.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      {
        name: 'Service 6',
        imageUrl: 'path/to/image2.jpg',
        description: 'on vous aide a se demenager ',
        number: '9999999'
      },
      // Add more Services as needed
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
  add(){}
}
