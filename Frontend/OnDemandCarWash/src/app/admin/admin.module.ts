import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdermanagementComponent } from './pages/ordermanagement/ordermanagement.component';
import { ReportmanagementComponent } from './pages/reportmanagement/reportmanagement.component';
import { AddoneditComponent } from './pages/addonmanagement/addonedit/addonedit.component';
import { AddonsaveComponent } from './pages/addonmanagement/addonsave/addonsave.component';
import { AddonlistComponent } from './pages/addonmanagement/addonlist/addonlist.component';
import { CarlistComponent } from './pages/carmanagement/carlist/carlist.component';
import { CarsaveComponent } from './pages/carmanagement/carsave/carsave.component';
import { CareditComponent } from './pages/carmanagement/caredit/caredit.component';
import { PclistComponent } from './pages/promocodemanagement/pclist/pclist.component';
import { PceditComponent } from './pages/promocodemanagement/pcedit/pcedit.component';
import { PcsaveComponent } from './pages/promocodemanagement/pcsave/pcsave.component';
import { SplistComponent } from './pages/serviceplanmanagement/splist/splist.component';
import { SpeditComponent } from './pages/serviceplanmanagement/spedit/spedit.component';
import { SpsaveComponent } from './pages/serviceplanmanagement/spsave/spsave.component';
import { CustomereditComponent } from './pages/customer/customeredit/customeredit.component';
import { CustomerlistComponent } from './pages/customer/customerlist/customerlist.component';
import { WasherlistComponent } from './pages/washer/washerlist/washerlist.component';
import { WashereditComponent } from './pages/washer/washeredit/washeredit.component';
import { WashersaveComponent } from './pages/washer/washersave/washersave.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    OrdermanagementComponent,
    ReportmanagementComponent,
    AddoneditComponent,
    AddonsaveComponent,
    AddonlistComponent,
    CarlistComponent,
    CarsaveComponent,
    CareditComponent,
    PclistComponent,
    PceditComponent,
    PcsaveComponent,
    SplistComponent,
    SpeditComponent,
    SpsaveComponent,
    CustomereditComponent,
    CustomerlistComponent,
    WasherlistComponent,
    WashereditComponent,
    WashersaveComponent,
    AdminComponent,
  ],
  
  
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
