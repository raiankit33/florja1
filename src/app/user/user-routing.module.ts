import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AutomationComponent } from './automation/automation.component';
import { ContactComponent } from './contact/contact.component';
import { IrrigationsComponent } from './irrigations/irrigations.component';
import { MeasurementdetailsComponent } from './measurementdetails/measurementdetails.component';
import { SeconddetailComponent } from './measurementdetails/seconddetail/seconddetail.component';
import { ThirddetailComponent } from './measurementdetails/thirddetail/thirddetail.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PlantComponent } from './plant/plant.component';
import { SensorComponent } from './sensor/sensor.component';
import { SocialComponent } from './social/social.component';

import { UserComponent } from './user.component';
import { UserdashComponent } from './userdash/userdash.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { VisualizationsComponent } from './visualizations/visualizations.component';
import { FourthdetailComponent } from './measurementdetails/fourthdetail/fourthdetail.component';
import { PlantdetailComponent } from './plant/plantdetail/plantdetail.component';

const routes: Routes = [
  { path: '', component: UserComponent,
  children:[
    {path:'dashboad',component:UserdashComponent},
    {path:'profile',component:UserprofileComponent},
    {path:'measurement',component:MeasurementsComponent},
         //
                      {path:'measureDetail',component:MeasurementdetailsComponent},
    {path:'secondDetail',component:SeconddetailComponent},
    {path:'thirdDetail',component:ThirddetailComponent},
    {path:'fourthDetail',component:FourthdetailComponent},

    {path:'sensors',component:SensorComponent},
    {path:'irrigation',component:IrrigationsComponent},
    {path:'plant',component:PlantComponent},
                       {path:'pDetail',component:PlantdetailComponent},
    {path:'visualization',component:VisualizationsComponent},
    {path:'automation',component:AutomationComponent},
    {path:'notification',component:NotificationsComponent},
    {path:'social',component:SocialComponent},
    {path:'contact',component:ContactComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
