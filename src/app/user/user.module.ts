import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './social/social.component';
import { AutomationComponent } from './automation/automation.component';
import { SensorComponent } from './sensor/sensor.component';
import { PlantComponent } from './plant/plant.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { ServiceService } from '../service/service.service';
import { UserService } from '../service/user.service';
import { ValidateService } from '../service/ValidateService';
import { AuthService } from '../service/auth.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { VisualizationsComponent } from './visualizations/visualizations.component';
import { UserdashComponent } from './userdash/userdash.component';
import { IrrigationsComponent } from './irrigations/irrigations.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { MeasurementdetailsComponent } from './measurementdetails/measurementdetails.component';
import { SeconddetailComponent } from './measurementdetails/seconddetail/seconddetail.component';
import { ThirddetailComponent } from './measurementdetails/thirddetail/thirddetail.component';
import { FourthdetailComponent } from './measurementdetails/fourthdetail/fourthdetail.component';
import { PlantdetailComponent } from './plant/plantdetail/plantdetail.component';


@NgModule({
  declarations: 
  [UserComponent, 
    UserprofileComponent,
     ContactComponent,
     SocialComponent,
     AutomationComponent,
     SensorComponent,
     PlantComponent,
     MeasurementsComponent,
     NotificationsComponent,
     VisualizationsComponent,
     UserdashComponent,
     IrrigationsComponent,
     MeasurementdetailsComponent,
     SeconddetailComponent,
     ThirddetailComponent,
     FourthdetailComponent,
     PlantdetailComponent],
     
  imports: [
  
    CommonModule,
    UserRoutingModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServiceService,UserService,ValidateService,AuthService],
})
export class UserModule { }
