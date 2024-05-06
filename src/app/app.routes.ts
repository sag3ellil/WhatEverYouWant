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
export const routes: Routes = [
    {path:'',component:DashbordComponent},
    { path: 'dashboard/donate', component: DonateComponent },
    { path: 'dashboard/lost-found', component: LostFoundComponent },
    { path: 'dashboard/services', component: ServicesComponent },
    { path: 'dashboard/buy', component: BuyComponent },
    { path: 'dashboard/sell', component: SellComponent },
    { path: 'dashboard/donate', redirectTo: 'donate', pathMatch: 'full' },

    { path: 'login', component: LoginComponent },
    { path: 'new/user', component: NewUserComponent },
    {path:'**',component:NotfoundComponent}];
