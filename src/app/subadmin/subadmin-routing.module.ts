import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubadminComponent } from './subadmin.component';
import { TenantdashComponent } from './tenantdash/tenantdash.component';
import { UsersComponent } from './users/users.component';
import { TenprofileComponent } from './tenprofile/tenprofile.component';

const routes: Routes = [{ 
  path: '', component: SubadminComponent,
  children:[
    { path: 'tendash', component:TenantdashComponent},
    { path: 'users', component:UsersComponent},
    { path: 'tenprofile', component:TenprofileComponent},
  ]


 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubadminRoutingModule { }
