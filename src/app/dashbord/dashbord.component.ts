import { Component } from '@angular/core';
import {DonateComponent} from '../donate/donate.component'
import { LostFoundComponent } from '../lost-found/lost-found.component';
import { ServicesComponent } from '../services/services.component';
import { BuyComponent } from '../buy/buy.component';
import { SellComponent } from '../sell/sell.component';
@Component({
  selector: 'app-dashbord',
  standalone: true,
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
  imports: [DonateComponent, LostFoundComponent]
})
export class DashbordComponent {

}
