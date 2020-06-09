import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdermanagementComponent } from './pages/ordermanagement/ordermanagement.component';
import { ReportmanagementComponent } from './pages/reportmanagement/reportmanagement.component';
import { AddonlistComponent } from './pages/addonmanagement/addonlist/addonlist.component';
import { AddoneditComponent } from './pages/addonmanagement/addonedit/addonedit.component';
import { AddonsaveComponent } from './pages/addonmanagement/addonsave/addonsave.component';
import { CareditComponent } from './pages/carmanagement/caredit/caredit.component';
import { CarlistComponent } from './pages/carmanagement/carlist/carlist.component';
import { CarsaveComponent } from './pages/carmanagement/carsave/carsave.component';
import { PcsaveComponent } from './pages/promocodemanagement/pcsave/pcsave.component';
import { PceditComponent } from './pages/promocodemanagement/pcedit/pcedit.component';
import { PclistComponent } from './pages/promocodemanagement/pclist/pclist.component';
import { SpsaveComponent } from './pages/serviceplanmanagement/spsave/spsave.component';
import { SpeditComponent } from './pages/serviceplanmanagement/spedit/spedit.component';
import { SplistComponent } from './pages/serviceplanmanagement/splist/splist.component';
import { CustomerlistComponent } from './pages/customer/customerlist/customerlist.component';
import { CustomereditComponent } from './pages/customer/customeredit/customeredit.component';
import { WasherlistComponent } from './pages/washer/washerlist/washerlist.component';
import { WashereditComponent } from './pages/washer/washeredit/washeredit.component';
import { WashersaveComponent } from './pages/washer/washersave/washersave.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  
  {
    path: '', component: AdminComponent, children: [ 
      { path: 'admin', redirectTo: '/dashboard', pathMatch: 'prefix' },
      { path: 'carlist', component: CarlistComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'addonlist', component: AddonlistComponent },
      { path: 'addonedit', component: AddoneditComponent },
      { path: 'addonsave', component: AddonsaveComponent },
      { path: 'caredit', component: CareditComponent },
      { path: 'carsave', component: CarsaveComponent },
      { path: 'pcsave', component: PcsaveComponent },
      { path: 'pcedit', component: PceditComponent },
      { path: 'pclist', component: PclistComponent },
      { path: 'spsave', component: SpsaveComponent },
      { path: 'spedit', component: SpeditComponent },
      { path: 'splist', component: SplistComponent },
      { path: 'customerlist', component: CustomerlistComponent },
      { path: 'customeredit', component: CustomereditComponent },
      { path: 'washerlist', component: WasherlistComponent },
      { path: 'washeredit', component: WashereditComponent },
      { path: 'washersave', component: WashersaveComponent },
      { path: 'ordermanagement', component: OrdermanagementComponent },
      { path: 'reportmanagement', component: ReportmanagementComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
