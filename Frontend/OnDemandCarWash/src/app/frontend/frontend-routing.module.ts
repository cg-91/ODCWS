import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { AbcComponent } from './abc/abc.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../frontend/helper/auth.guard';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
 
  {
    path: '', component: FrontendComponent, children: [
      { path: ' ', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'abc', component: AbcComponent, canActivate: [AuthGuard]},
      { path: 'login', component: LoginComponent},
      { path: 'signup', component: RegisterComponent},
      { path: 'customer', component: CustomerComponent},
      { path: '**', component: PagenotfoundComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
