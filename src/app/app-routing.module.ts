import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademialoginComponent } from './academialogin/academialogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { TenantloginComponent } from './tenantlogin/tenantlogin.component';
import { UloginComponent } from './ulogin/ulogin.component';


const routes: Routes = [
  {path:'',component:UloginComponent},
  {path:'tlogin',component:TenantloginComponent},
  
  {path:'alogin',component:AcademialoginComponent},
  {path:'adminlogin',component:AdminloginComponent},

  { path: 'superadmin', loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperadminModule) },
  { path: 'subadmin', loadChildren: () => import('./subadmin/subadmin.module').then(m => m.SubadminModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
