import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { SuperadminComponent } from './superadmin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { SenrequestComponent } from './senrequest/senrequest.component';
import { AcademiaComponent } from './academia/academia.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ServiceService } from '../service/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TenantComponent } from './tenant/tenant.component';
import { EdittenComponent } from '../superadmin/editten/editten.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    SuperadminComponent,
     AdmindashComponent,
      SenrequestComponent,
       AcademiaComponent,
        TenantComponent,
        EdittenComponent
      ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    SuperadminRoutingModule
  ],
  providers: [ServiceService],
})
export class SuperadminModule { }
