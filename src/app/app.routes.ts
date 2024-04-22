import { Routes } from '@angular/router';
import {DashbordComponent} from '../app/dashbord/dashbord.component'
import {NotfoundComponent} from '../app/notfound/notfound.component'
import { DonateComponent } from './donate/donate.component';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { ServicesComponent } from './services/services.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
export const routes: Routes = [
    {path:'',component:DashbordComponent},
    { path: 'donate', component: DonateComponent },
    { path: 'lost-found', component: LostFoundComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'sell', component: SellComponent },
    { path: 'donate', redirectTo: 'donate', pathMatch: 'full' },
    {path:'**',component:NotfoundComponent}];
