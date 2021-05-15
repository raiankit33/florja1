import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubadminComponent } from './subadmin.component';
import { TenantdashComponent } from './tenantdash/tenantdash.component';
import { UsersComponent } from './users/users.component';
import { TenprofileComponent } from './tenprofile/tenprofile.component';
import { SubNotificationComponent } from './sub-notification/sub-notification.component';
import { SubTenantComponent } from './sub-tenant/sub-tenant.component';
import { SubSocialComponent } from './sub-social/sub-social.component';

const routes: Routes = [{ 
  path: '', component: SubadminComponent,
  children:[
    { path: 'tendash', component:TenantdashComponent},
    { path: 'users', component:UsersComponent},
    { path: 'tenprofile', component:TenprofileComponent},
     { path: 'subTenant', component:SubTenantComponent},
     { path: 'notification', component:SubNotificationComponent},
     { path: 'social', component:SubSocialComponent},
     
  ]


 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubadminRoutingModule { }
