import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';

import { SuperadminComponent } from './superadmin.component';
import { SenrequestComponent } from './senrequest/senrequest.component';
import { AcademiaComponent } from './academia/academia.component';

import { TenentComponent } from '../component/tenent/tenent.component';

const routes: Routes = [
  { path: '', component: SuperadminComponent,
  children:[
    { path: 'admindash', component: AdmindashComponent},
    { path: 'sensorreq', component: SenrequestComponent},
    { path: 'academia', component: AcademiaComponent},
    { path: 'tenant', component:TenentComponent},
    
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
