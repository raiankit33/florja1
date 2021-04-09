import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-tenent',
  templateUrl: './tenent.component.html',
  styleUrls: ['./tenent.component.css']
})
export class TenentComponent implements OnInit {

  T_ID:null;
  Name:any;
  Email:any;
  Contact:any;
  Permission:any;
  tenantDetails:any;

  constructor(
    private serviceService : ServiceService,
    private router: Router
  ) { }

  p: number = 1;
  tenant =[];

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

    })

      
  }

  getTenantDetails(){
    this.serviceService.getTenantDetails(this.T_ID).subscribe((res:any)=>{
      this.tenantDetails = res.data;
    }
    
    );
  } 
   

}
