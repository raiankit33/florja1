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





@NgModule({
  declarations: [
    AppComponent,  
   
   
    NavbarComponent,
   
    TenantloginComponent,
    UloginComponent,
    AcademialoginComponent,
    AdminloginComponent,

   
    

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

    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut :1000,
      progressBar : true
    }),  // ToastrModule added

  ],
  providers: [UserService,ValidateService,AuthService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
