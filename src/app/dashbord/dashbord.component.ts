import { Component, inject, OnInit } from '@angular/core';
import { DonateComponent } from '../donate/donate.component';
import { LostFoundComponent } from '../lost-found/lost-found.component';
import { ServicesComponent } from '../services/services.component';
import { BuyComponent } from '../buy/buy.component';
import { SellComponent } from '../sell/sell.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashbord',
  standalone: true,
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  imports: [CommonModule,DonateComponent, LostFoundComponent, SellComponent, ServicesComponent, BuyComponent, RouterModule, RouterOutlet]
})
export class DashbordComponent implements OnInit {
  commonService: CommonService = inject(CommonService);
  componentId = '1';
  components = [
    { id: '1', title: 'Donate' },
    { id: '2', title: 'Lost & Found' },
    { id: '3', title: 'Services' },
    { id: '4', title: 'Buy' },
    { id: '5', title: 'Sell' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.activateComp(id);
    }
  }

  activateComp(id: string): void {
    this.componentId = id;
    this.commonService.dashbordComponentID = id;
  }
}
