import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';

import { SuperadminComponent } from './superadmin.component';
import { SenrequestComponent } from './senrequest/senrequest.component';
import { AcademiaComponent } from './academia/academia.component';

import { TenantComponent} from './tenant/tenant.component';
import { from } from 'rxjs';
import { EdittenComponent } from './editten/editten.component';

const routes: Routes = [
  { path: '', component: SuperadminComponent,
  children:[
    { path: 'admindash', component: AdmindashComponent},
    { path: 'sensorreq', component: SenrequestComponent},
    { path: 'academia', component: AcademiaComponent},
    { path: 'tenant', component:TenantComponent},
    { path: 'edit', component:EdittenComponent},
    
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
