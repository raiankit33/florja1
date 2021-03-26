import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SensorsComponent } from './sensors/sensors.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { SignupComponent } from './component/signup/signup.component';


const routes: Routes = [
  {path:'',component:LoginsignupComponent},
  {path:'home',component:HomeComponent,
  children: [
    {path:'dashboad',component:DashboadComponent},
    {path:'sensors',component:SensorsComponent},
    {path:'profile',component:UserprofileComponent},
    
  ]

},

{path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
