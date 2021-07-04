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



  { path: 'florja', loadChildren: () => import('./florja/florja.module').then(m => m.FlorjaModule) },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
