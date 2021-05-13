import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';

import { SuperadminComponent } from './superadmin.component';
import { SenrequestComponent } from './senrequest/senrequest.component';
import { AcademiaComponent } from './academia/academia.component';

import { TenantComponent} from './tenant/tenant.component';
import { from } from 'rxjs';
import { EdittenComponent } from './editten/editten.component';
import { SensortypeComponent } from './sensortype/sensortype.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddplantComponent } from './addplant/addplant.component';
import { PlantdetailComponent } from './addplant/plantdetail/plantdetail.component';
import { AddirrigationComponent } from './addirrigation/addirrigation.component';
import { IrrigationdetailsComponent } from './addirrigation/irrigationdetails/irrigationdetails.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { NotificationComponent } from './notification/notification.component';
import { SocialsComponent } from './socials/socials.component';

const routes: Routes = [
  { path: '', component: SuperadminComponent,
  children:[
    { path: 'adminDash', component: AdmindashComponent},
    { path: 'sensorreq', component: SenrequestComponent},
    { path: 'academia', component: AcademiaComponent},
    { path: 'tenant', component:TenantComponent},
    { path: 'adminUser', component:AdminUserComponent},
    { path: 'user', component:AdduserComponent},
    { path: 'edit', component:EdittenComponent},
    { path: 'stype', component:SensortypeComponent},
    { path: 'plant', component:AddplantComponent},
    { path: 'plantD', component:PlantdetailComponent},
    { path: 'irrigation', component:AddirrigationComponent},
    { path: 'irrigationDetail', component:IrrigationdetailsComponent},
    { path: 'notification', component:NotificationComponent},
    { path: 'social', component:SocialsComponent},
    
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
