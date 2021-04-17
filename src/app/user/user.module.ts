import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './social/social.component';
import { AutomationComponent } from './automation/automation.component';


@NgModule({
  declarations: 
  [UserComponent, 
    UserprofileComponent,
     ContactComponent,
     SocialComponent,
     AutomationComponent],
     
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
