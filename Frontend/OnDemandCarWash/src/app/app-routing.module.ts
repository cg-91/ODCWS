import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { FrontendComponent } from './frontend/frontend.component';

const routes: Routes = [
 { path: ' ', component: FrontendComponent, children: [
    { path: '', loadChildren: './frontend/frontend.module#FrontendModule'}
 ]},
 { path: 'admin', component: AdminComponent, children: [
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
