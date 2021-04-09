import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminRoutingModule } from './subadmin-routing.module';
import { SubadminComponent } from './subadmin.component';
import { TenantdashComponent } from './tenantdash/tenantdash.component';


@NgModule({
  declarations: [SubadminComponent, TenantdashComponent],
  imports: [
    CommonModule,
    SubadminRoutingModule
  ]
})
export class SubadminModule { }
