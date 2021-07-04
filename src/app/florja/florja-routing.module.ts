import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashComponent } from '../AdminFloder/admin-dash/admin-dash.component';
import { FlorjaComponent } from './florja.component';
import { AdminIrrigationComponent } from '../AdminFloder/admin-irrigation/admin-irrigation.component';
import { AdminNotificationComponent } from '../AdminFloder/admin-notification/admin-notification.component';
import { AdminPlantComponent } from '../AdminFloder/admin-plant/admin-plant.component';
import { AdminSensorComponent } from '../AdminFloder/admin-sensor/admin-sensor.component';
import { AdminSentypeComponent } from '../AdminFloder/admin-sentype/admin-sentype.component';




// tenant
import { TenProfileComponent } from '../tenantFloder/ten-profile/ten-profile.component';
import { TenSocialComponent } from '../tenantFloder/ten-social/ten-social.component';
import { TenTenantComponent } from '../tenantFloder/ten-tenant/ten-tenant.component';
import { TenUserComponent } from '../tenantFloder/ten-user/ten-user.component';
import { TenDashComponent } from '../tenantFloder/ten-dash/ten-dash.component';
import { TenNotificationComponent } from '../tenantFloder/ten-notification/ten-notification.component';
//user
import { UserprofileComponent } from '../userFloder/userprofile/userprofile.component';
import { ContactComponent } from '../userFloder/contact/contact.component';
import { SocialComponent } from '../userFloder/social/social.component';
import { AutomationComponent } from '../userFloder/automation/automation.component';
import { SensorComponent } from '../userFloder/sensor/sensor.component';
import { PlantComponent } from '../userFloder/plant/plant.component';
import { MeasurementsComponent } from '../userFloder/measurements/measurements.component';
import { NotificationsComponent } from '../userFloder/notifications/notifications.component';
import { VisualizationsComponent } from '../userFloder/visualizations/visualizations.component';
import { UserdashComponent } from '../userFloder/userdash/userdash.component';
import { IrrigationsComponent } from '../userFloder/irrigations/irrigations.component';
import { MeasurementdetailsComponent } from '../userFloder/measurementdetails/measurementdetails.component';
import { SeconddetailComponent } from '../userFloder/measurementdetails/seconddetail/seconddetail.component';
import { ThirddetailComponent } from '../userFloder/measurementdetails/thirddetail/thirddetail.component';
import { FourthdetailComponent } from '../userFloder/measurementdetails/fourthdetail/fourthdetail.component';
import { PlantdetailComponent } from '../userFloder/plant/plantdetail/plantdetail.component';
import { AdminAcademiaComponent } from '../AdminFloder/admin-academia/admin-academia.component';
import { AdminSocialComponent } from '../AdminFloder/admin-social/admin-social.component';
import { AdminPlantdetailComponent } from '../AdminFloder/admin-plantdetail/admin-plantdetail.component';
import { AdminIrrigationdetailComponent } from '../AdminFloder/admin-irrigationdetail/admin-irrigationdetail.component';
import { AdminTenantComponent } from '../AdminFloder/admin-tenant/admin-tenant.component';
import { AdminSubadminComponent } from '../AdminFloder/admin-subadmin/admin-subadmin.component';
import { AdminUserComponent } from '../AdminFloder/admin-user/admin-user.component';

//
import { AcadDashoadComponent } from '../Academiafloder/acad-dashoad/acad-dashoad.component';


const routes: Routes = [{ path: '', component: FlorjaComponent,
children:[
  // admin
  { path: 'adminDash', component: AdminDashComponent},
    { path: 'sensorreq', component: AdminSensorComponent},
    { path: 'academia', component: AdminAcademiaComponent},
    { path: 'tenant', component:AdminTenantComponent},
    { path: 'adminUser', component:AdminSubadminComponent},
    { path: 'userN', component:AdminUserComponent},
    
    { path: 'stype', component:AdminSentypeComponent},
    { path: 'plant', component:AdminPlantComponent},
    { path: 'plantD', component:AdminPlantdetailComponent},
    { path: 'irrigation', component:AdminIrrigationComponent},
    { path: 'irrigationDetail', component:AdminIrrigationdetailComponent},
    { path: 'notification', component:AdminNotificationComponent},
    { path: 'social', component:AdminSocialComponent},

// tenant

{ path: 'TenProfile', component: TenProfileComponent},
{ path: 'tenSocial', component: TenSocialComponent},
{ path: 'SubTenant', component: TenTenantComponent},

{ path: 'TenUser', component: TenUserComponent},
{ path: 'SubAdmin', component: TenDashComponent},
{ path: 'tenNotification', component: TenNotificationComponent},

//user

{path:'dashboad',component:UserdashComponent},
{path:'profile',component:UserprofileComponent},
{path:'measurement',component:MeasurementsComponent},
     //
                  {path:'measureDetail',component:MeasurementdetailsComponent},
{path:'secondDetail',component:SeconddetailComponent},
{path:'thirdDetail',component:ThirddetailComponent},
{path:'fourthDetail',component:FourthdetailComponent},

{path:'sensors',component:SensorComponent},
{path:'uIrrigation',component:IrrigationsComponent},
{path:'uPlant',component:PlantComponent},
                   {path:'pDetail',component:PlantdetailComponent},
{path:'visualization',component:VisualizationsComponent},
{path:'automation',component:AutomationComponent},
{path:'uNotification',component:NotificationsComponent},
{path:'social',component:SocialComponent},
{path:'contact',component:ContactComponent},

//academia 
{path:'academiaDash',component:AcadDashoadComponent},
]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlorjaRoutingModule { }
