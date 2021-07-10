import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademiaForgetComponent } from './Academiafloder/academia-forget/academia-forget.component';
import { AcademialoginComponent } from './academialogin/academialogin.component';
import { ForgetPasswordComponent } from './AdminFloder/forget-password/forget-password.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TenantForgetComponent } from './TenantFloder/tenant-forget/tenant-forget.component';

import { TenantloginComponent } from './tenantlogin/tenantlogin.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { UserForgetComponent } from './userFloder/user-forget/user-forget.component';


const routes: Routes = [
  {path:'',component:UloginComponent},
  {path:'tlogin',component:TenantloginComponent},
  {path:'tForget',component:TenantForgetComponent},
  
  {path:'alogin',component:AcademialoginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'forget',component:ForgetPasswordComponent},

  {path:'userForget',component:UserForgetComponent},
  {path:'academiaForget',component:AcademiaForgetComponent},

  { path: 'florja', loadChildren: () => import('./florja/florja.module').then(m => m.FlorjaModule) },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
