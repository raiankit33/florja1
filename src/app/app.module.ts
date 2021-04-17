import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SensorsComponent } from './sensors/sensors.component';
import { FooterComponent } from './footer/footer.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ServiceService } from './service/service.service';
import { UserService } from './service/user.service';
import { ValidateService } from './service/ValidateService';
import { AuthService } from './service/auth.service';
import { MeasurementComponent } from './component/measurement/measurement.component';
import { IrrigationComponent } from './component/irrigation/irrigation.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantsComponent } from './component/plants/plants.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AutomationComponent } from './component/automation/automation.component';
import { ContactComponent } from './component/contact/contact.component';
import { VisualizationComponent } from './component/visualization/visualization.component';

import { SoicalpageComponent } from './component/soicalpage/soicalpage.component';

import { PlantdetailsComponent } from './component/plantdetails/plantdetails.component';

import { NotificationComponent } from './component/notification/notification.component';
import { SignupComponent } from './component/signup/signup.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TenantloginComponent } from './tenantlogin/tenantlogin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,

    SensorsComponent,

    FooterComponent,

    DashboadComponent,

    LoginsignupComponent,

    NavbarComponent,

    MeasurementComponent,

    IrrigationComponent,

    UserprofileComponent,


    PlantsComponent,

   

    AutomationComponent,

    ContactComponent,

    VisualizationComponent,


    SoicalpageComponent,



 

    PlantdetailsComponent,

   

    NotificationComponent,

    SignupComponent,

    TenantloginComponent,

    

   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule, 
   
  ],
  providers: [ServiceService,UserService,ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
