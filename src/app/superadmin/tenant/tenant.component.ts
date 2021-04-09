import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  T_ID :any ;
  Name:any;
  Email:any;
  Contact:any;
  Permission:any;
  tenantDetails:any;
  constructor(
    private serviceService : ServiceService,
    private router: Router
  ) { }

 

  ngOnInit(): void {
    this.getTenantDetails();
  }

  key : string ="tenant_id";
  reverse: boolean;

  sortData(key){
 this.key = key;
 this.reverse = !this.reverse;
  }
  
  onAddSubmit(){

    const tenant = {

      T_ID: this.T_ID,
      Name:this.Name,
      Email: this.Email,
      Contact: this.Contact,
      Permission: this.Permission,
     
    }
console.log(tenant);
    this.serviceService.registerTenant(tenant).subscribe( res=> {
      console.log(res);
  
      this.router.navigateByUrl('superadmin/tenant');
    })

      
  }
   

  getTenantDetails(){
    this.serviceService.getTenantDetails(this.T_ID).subscribe((res:any)=>{
      this.tenantDetails = res.data;
    }
    
    );
  } 

}
