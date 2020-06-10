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
import { AuthGuard } from '../frontend/helper/auth.guard';

const routes: Routes = [
  
  {
    path: '', component: AdminComponent, children: [ 
      { path: 'admin', redirectTo: '/dashboard', pathMatch: 'prefix', canActivate: [AuthGuard]},
      { path: 'carlist', component: CarlistComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'addonlist', component: AddonlistComponent, canActivate: [AuthGuard] },
      { path: 'addonedit', component: AddoneditComponent, canActivate: [AuthGuard] },
      { path: 'addonsave', component: AddonsaveComponent, canActivate: [AuthGuard] },
      { path: 'caredit', component: CareditComponent, canActivate: [AuthGuard] },
      { path: 'carsave', component: CarsaveComponent, canActivate: [AuthGuard] },
      { path: 'pcsave', component: PcsaveComponent, canActivate: [AuthGuard] },
      { path: 'pcedit', component: PceditComponent, canActivate: [AuthGuard] },
      { path: 'pclist', component: PclistComponent, canActivate: [AuthGuard] },
      { path: 'spsave', component: SpsaveComponent, canActivate: [AuthGuard] },
      { path: 'spedit', component: SpeditComponent, canActivate: [AuthGuard] },
      { path: 'splist', component: SplistComponent, canActivate: [AuthGuard] },
      { path: 'customerlist', component: CustomerlistComponent, canActivate: [AuthGuard] },
      { path: 'customeredit', component: CustomereditComponent, canActivate: [AuthGuard] },
      { path: 'washerlist', component: WasherlistComponent, canActivate: [AuthGuard] },
      { path: 'washeredit', component: WashereditComponent, canActivate: [AuthGuard] },
      { path: 'washersave', component: WashersaveComponent, canActivate: [AuthGuard] },
      { path: 'ordermanagement', component: OrdermanagementComponent, canActivate: [AuthGuard] },
      { path: 'reportmanagement', component: ReportmanagementComponent, canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
