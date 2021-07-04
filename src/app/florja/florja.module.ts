import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlorjaRoutingModule } from './florja-routing.module';
import { FlorjaComponent } from './florja.component';
import { ServiceService } from '../service/service.service';
import { SubadminService } from '../service/subadmin.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxImageCompressService} from 'ngx-image-compress';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { MessagingService } from '../service/messaging.service';


@NgModule({
  declarations: [FlorjaComponent],
  imports: [
    CommonModule,
    FlorjaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [ServiceService,SubadminService,NgxImageCompressService,MessagingService],
})
export class FlorjaModule { }
