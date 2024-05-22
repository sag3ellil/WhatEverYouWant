import { Routes } from '@angular/router';
import {DashbordComponent} from '../app/dashbord/dashbord.component'
import {NotfoundComponent} from '../app/notfound/notfound.component'
import { DonateComponent } from './donate/donate.component';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { ServicesComponent } from './services/services.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import {ObjectDetailsComponent} from './object-details/object-details.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { NewItemComponent } from './new-item/new-item.component';

export const routes: Routes = [
    {path:'',component:DashbordComponent},
    {path:':id',component:DashbordComponent},
   /* { path: 'dashboard/donate', component: DonateComponent },
    { path: 'dashboard/lost-found', component: LostFoundComponent },
    { path: 'dashboard/services', component: ServicesComponent },
    { path: 'dashboard/buy', component: BuyComponent },
    { path: 'dashboard/sell', component: SellComponent },
    { path: 'dashboard/donate', redirectTo: 'donate', pathMatch: 'full' },*/
    
    { path: 'dashboard/profile', component: ProfileUserComponent },
    { path: 'dashboard/login', component: LoginComponent },
    { path: 'new/user', component: NewUserComponent },
    { path: 'new/item', component: NewItemComponent },
    { path: 'details/:id', component: ObjectDetailsComponent,  title: 'Item details'},
    { path:'**',component:NotfoundComponent}
   
    ];
