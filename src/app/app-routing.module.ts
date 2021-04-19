import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { SignupComponent } from './component/signup/signup.component';



import { TenantloginComponent } from './tenantlogin/tenantlogin.component';
import { UloginComponent } from './ulogin/ulogin.component';


const routes: Routes = [
  {path:'',component:UloginComponent},
  {path:'tlogin',component:TenantloginComponent},
//   {path:'home',component:HomeComponent,
//   children: [
//     {path:'dashboad',component:DashboadComponent},
//     {path:'profile',component:UserprofileComponent},
   
  

//     {path:'measurement',component:MeasurementComponent},
//     {path:'sensors',component:SensorsComponent},
    
//     {path:'irrigation',component:IrrigationComponent},
//     {path:'plant',component:PlantsComponent},
//     {path:'details',component:PlantdetailsComponent},
//     {path:'visualization',component:VisualizationComponent},
//     {path:'automation',component:AutomationComponent},
//     {path:'notification',component:NotificationComponent},
//     {path:'social',component:SoicalpageComponent},
//     {path:'contact',component:ContactComponent},

//   ]


// },

{path:'signup',component:SignupComponent},

  { path: 'superadmin', loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperadminModule) },
  { path: 'subadmin', loadChildren: () => import('./subadmin/subadmin.module').then(m => m.SubadminModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
