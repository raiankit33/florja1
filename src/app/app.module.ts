import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FooterComponent } from './footer/footer.component';


import { NavbarComponent } from './navbar/navbar.component';

import { ServiceService } from './service/service.service';
import { UserService } from './service/user.service';
import { ValidateService } from './service/ValidateService';
import { AuthService } from './service/auth.service';

import { HttpClientModule ,HTTP_INTERCEPTORS  } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';

import { SignupComponent } from './component/signup/signup.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TenantloginComponent } from './tenantlogin/tenantlogin.component';

import { TokenInterceptorService } from './service/token-interceptor.service';
import { UloginComponent } from './ulogin/ulogin.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
  
    FooterComponent,

   

    NavbarComponent,

    SignupComponent,

    TenantloginComponent,

    UloginComponent,

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
  providers: [UserService,ValidateService,AuthService , {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
