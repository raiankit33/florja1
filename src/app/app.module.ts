import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SensorsComponent } from './sensors/sensors.component';
import { FooterComponent } from './footer/footer.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MeasurementComponent } from './component/measurement/measurement.component';
import { IrrigationComponent } from './component/irrigation/irrigation.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';

import { PlantsComponent } from './component/plants/plants.component';
import { TenentComponent } from './component/tenent/tenent.component';
import { AutomationComponent } from './component/automation/automation.component';
import { ContactComponent } from './component/contact/contact.component';
import { VisualizationComponent } from './component/visualization/visualization.component';
import { UsersComponent } from './component/users/users.component';
import { SoicalpageComponent } from './component/soicalpage/soicalpage.component';
import { MapComponent } from './map/map.component';
import { AcademiaComponent } from './component/academia/academia.component';
import { PlantdetailsComponent } from './component/plantdetails/plantdetails.component';
import { EmergencycontactComponent } from './component/emergencycontact/emergencycontact.component';
import { NotificationComponent } from './component/notification/notification.component';

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

    TenentComponent,

    AutomationComponent,

    ContactComponent,

    VisualizationComponent,

    UsersComponent,

    SoicalpageComponent,

    MapComponent,

    AcademiaComponent,

    PlantdetailsComponent,

    EmergencycontactComponent,

    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
