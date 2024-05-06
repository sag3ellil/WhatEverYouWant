import { Component } from '@angular/core';
import {DonateComponent} from '../donate/donate.component'
import { LostFoundComponent } from '../lost-found/lost-found.component';
import { ServicesComponent } from '../services/services.component';
import { BuyComponent } from '../buy/buy.component';
import { SellComponent } from '../sell/sell.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashbord',
  standalone: true,
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
  imports: [DonateComponent, LostFoundComponent, SellComponent ,ServicesComponent,  BuyComponent , RouterModule, RouterOutlet]
})
export class DashbordComponent {
  activateComp(idComponant: string)
  {
   
    let ob =   document.getElementById("1");
    let ob2 = document.getElementById("title-donate");
    if (ob != null && ob2!=null)
    {
    ob.style.display = 'none';
    ob2.style.backgroundColor = "rgba(255, 255, 255)";
    }

    ob =   document.getElementById("2");
    ob2 = document.getElementById("title-lost-found");
    if (ob != null  && ob2!=null)
    {
    ob.style.display = 'none';
    ob2.style.backgroundColor = "rgba(255, 255, 255)";
    }

    ob =   document.getElementById("3");
    ob2 = document.getElementById("title-services");
    if (ob != null  && ob2!=null)
    {
    ob.style.display = 'none';
    ob2.style.backgroundColor = "rgba(255, 255, 255)";
    }

    ob =   document.getElementById("4");
    ob2 = document.getElementById("title-buy");
    if (ob != null && ob2!=null)
    {
    ob.style.display = 'none';
    ob2.style.backgroundColor = "rgba(255, 255, 255)";
    }

    ob =   document.getElementById("5");
    ob2 = document.getElementById("title-sell");
    if (ob != null && ob2!=null)
    {
    ob.style.display = 'none';
    ob2.style.backgroundColor = "rgba(255, 255, 255)";
    }

    ob =   document.getElementById(idComponant);
    
    if (ob != null)
    {
    ob.style.display = 'block';
    let title:string="";
    switch(idComponant){
      case "1": title="title-donate"; break;
      case "2": title = "title-lost-found";break;
      case "3": title = "title-services";break;
      case "4": title = "title-buy";break;
      case "5": title = "title-sell";break;
      default: title = "title-donate";break;
    }

    ob2 = document.getElementById(title);
    if(ob2 != null)
    ob2.style.backgroundColor = "rgb(164, 189, 211)";
    }
    
  }
}
