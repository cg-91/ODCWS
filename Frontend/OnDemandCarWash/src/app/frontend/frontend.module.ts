import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontheaderComponent } from './frontheader/frontheader.component';
import { FrontfooterComponent } from './frontfooter/frontfooter.component';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AbcComponent } from './abc/abc.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JasperoAlertsModule } from '@jaspero/ng-alerts';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    FrontendComponent,
    FrontheaderComponent,
    FrontfooterComponent,
    HomeComponent,
    AbcComponent,
    PagenotfoundComponent,
    RegisterComponent,
    AlertComponent,
    LoginComponent,
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    JasperoAlertsModule.forRoot()
  ]
})
export class FrontendModule { }
