import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './service/user.service';
import { ValidateService } from './service/ValidateService';
import { AuthService } from './service/auth.service';
import { HttpClientModule ,HTTP_INTERCEPTORS  } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TenantloginComponent } from './tenantlogin/tenantlogin.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { AcademialoginComponent } from './academialogin/academialogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
//admin
import { AdminPlantComponent } from './AdminFloder/admin-plant/admin-plant.component';
import { AdminDashComponent } from './AdminFloder/admin-dash/admin-dash.component';
import { AdminUserComponent } from './AdminFloder/admin-user/admin-user.component';
import { AdminIrrigationComponent } from './AdminFloder/admin-irrigation/admin-irrigation.component';
import { AdminNotificationComponent } from './AdminFloder/admin-notification/admin-notification.component';
import { AdminSensorComponent } from './AdminFloder/admin-sensor/admin-sensor.component';
import { AdminSentypeComponent } from './AdminFloder/admin-sentype/admin-sentype.component';
import { AdminSocialComponent } from './AdminFloder/admin-social/admin-social.component';
import { AdminAcademiaComponent } from './AdminFloder/admin-academia/admin-academia.component';
import { AdminSubadminComponent } from './AdminFloder/admin-subadmin/admin-subadmin.component';
import { AdminPlantdetailComponent } from './AdminFloder/admin-plantdetail/admin-plantdetail.component';
//tenant
import { TenProfileComponent } from './tenantFloder/ten-profile/ten-profile.component';
import { TenSocialComponent } from './tenantFloder/ten-social/ten-social.component';
import { TenTenantComponent } from './tenantFloder/ten-tenant/ten-tenant.component';
import { TenUserComponent } from './tenantFloder/ten-user/ten-user.component';
import { TenDashComponent } from './tenantFloder/ten-dash/ten-dash.component';
import { TenNotificationComponent } from './tenantFloder/ten-notification/ten-notification.component';
//user
import { UserprofileComponent } from './userFloder/userprofile/userprofile.component';
import { ContactComponent } from './userFloder/contact/contact.component';
import { SocialComponent } from './userFloder/social/social.component';
import { AutomationComponent } from './userFloder/automation/automation.component';
import { SensorComponent } from './userFloder/sensor/sensor.component';
import { PlantComponent } from './userFloder/plant/plant.component';
import { MeasurementsComponent } from './userFloder/measurements/measurements.component';
import { NotificationsComponent } from './userFloder/notifications/notifications.component';
import { VisualizationsComponent } from './userFloder/visualizations/visualizations.component';
import { UserdashComponent } from './userFloder/userdash/userdash.component';
import { IrrigationsComponent } from './userFloder/irrigations/irrigations.component';
import { MeasurementdetailsComponent } from './userFloder/measurementdetails/measurementdetails.component';
import { SeconddetailComponent } from './userFloder/measurementdetails/seconddetail/seconddetail.component';
import { ThirddetailComponent } from './userFloder/measurementdetails/thirddetail/thirddetail.component';
import { FourthdetailComponent } from './userFloder/measurementdetails/fourthdetail/fourthdetail.component';
import { PlantdetailComponent } from './userFloder/plant/plantdetail/plantdetail.component';
//

import { MessagingService } from './service/messaging.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { SubadminService } from './service/subadmin.service';
import { environment } from '../environments/environment';
import {NgxImageCompressService} from 'ngx-image-compress';
import { AdminIrrigationdetailComponent } from './AdminFloder/admin-irrigationdetail/admin-irrigationdetail.component';
import { AdminTenantComponent } from './AdminFloder/admin-tenant/admin-tenant.component';
import { AcadDashoadComponent } from './Academiafloder/acad-dashoad/acad-dashoad.component';
import { ForgetPasswordComponent } from './AdminFloder/forget-password/forget-password.component';
import { TenantForgetComponent } from './TenantFloder/tenant-forget/tenant-forget.component';
import { UserForgetComponent } from './userFloder/user-forget/user-forget.component';
import { AcademiaForgetComponent } from './Academiafloder/academia-forget/academia-forget.component';
import { SensorDetailComponent } from './AdminFloder/admin-sensor/sensor-detail/sensor-detail.component';


@NgModule({
  declarations: [
    AppComponent,  
   
   
    NavbarComponent,
   
    TenantloginComponent,
    UloginComponent,
    AcademialoginComponent,
    AdminloginComponent,
  
    AdminPlantComponent,
    AdminDashComponent,
    AdminUserComponent,
    AdminIrrigationComponent,
    AdminNotificationComponent,
    AdminSensorComponent,
    AdminSentypeComponent,
    AdminSocialComponent,
    TenProfileComponent,
    TenSocialComponent,
    TenTenantComponent,
    TenUserComponent,
    TenDashComponent,
    TenNotificationComponent,
    AdminAcademiaComponent,
    AdminSubadminComponent,
    AdminPlantdetailComponent,

    //user
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
    AdminIrrigationdetailComponent,
    AdminTenantComponent,
    AcadDashoadComponent,
    ForgetPasswordComponent,
    TenantForgetComponent,
    UserForgetComponent,
    AcademiaForgetComponent,
    SensorDetailComponent,

   
    

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
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),

    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut :1000,
      progressBar : true
    }),  // ToastrModule added

  ],
  providers: [UserService,ValidateService,AuthService,MessagingService,SubadminService,NgxImageCompressService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
