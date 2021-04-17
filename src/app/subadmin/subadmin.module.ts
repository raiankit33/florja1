import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminRoutingModule } from './subadmin-routing.module';
import { SubadminComponent } from './subadmin.component';
import { TenantdashComponent } from './tenantdash/tenantdash.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubadminService } from '../service/subadmin.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { TenprofileComponent } from './tenprofile/tenprofile.component';


@NgModule({
  declarations: [
    SubadminComponent,
     TenantdashComponent,
     
      UsersComponent,
     
      TenprofileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SubadminRoutingModule
  ],
  providers: [SubadminService],
})
export class SubadminModule { }
