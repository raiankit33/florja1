import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-editten',
  templateUrl: './editten.component.html',
  styleUrls: ['./editten.component.css']
})
export class EdittenComponent implements OnInit {


  userObj = {
    T_ID:"",
    Name :"",
    Email : "",
    Contact: "",
    Permission :""
  };

  constructor(  
    private serviceService : ServiceService,
    private sharedData : SharedService,
    private router: Router) { }

  ngOnInit(): void {

     
    this.sharedData.currentSharedData.subscribe(res =>{ 
      this.userObj={
             
        T_ID : res['T_ID'],
        Name: res['Name'],
        Email:res['Email'],
        Contact: res['Contact'],
        Permission:res['Permission']
         
  } } )
}


  updateTen(){
    this.serviceService.updateTenant(this.userObj).subscribe(()=>{
      //  this.getDriverDetails();
      this.router.navigate(['superadmin/tenant']);
    })
  }

}
