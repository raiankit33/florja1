import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { SharedService } from "../../service/shared.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    permission: new FormControl('',Validators.required),
   

  })
  p :any ;
  index:any; // T_ID :string;
  // Name:string;
  // Email:string;
  // Contact:string;
  // Permission:string;
  isEdit=false;
  tenantDetails=[];
  tenant: any;

 

  userObj = {
    id:"",
    name :"",
    email : "",
    phone: "",
    permission :""
  };
  name:any;

  constructor(
    private serviceService : ServiceService,
    private sharedData : SharedService,
    private router: Router
  ) { 
    this.serviceService.listen().subscribe((m:any)=>{
    console.log(m);
    this.getTenantDetails();
  })
  }

 

  ngOnInit(): void {
    
    this.getTenantDetails( );
  }

  key : string ="tenant_id";
  reverse: boolean;




  sortData(key){
 this.key = key;
 this.reverse = !this.reverse;
  }

  openModel(){
    this.isEdit = false;
    
  }

  Search(){
    if(this.name == ""){
      this.getTenantDetails();
    }else{
      this.tenantDetails = this.tenantDetails.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
  
 

  onAddSubmit(){

    // const tenant = {

    //   T_ID: this.T_ID,
    //   Name:this.Name,
    //   Email: this.Email,
    //   Contact: this.Contact,
    //   Permission: this.Permission,
     
    // }
    if(this.form.valid){
     
      this.serviceService.registerTenant(this.form.value).subscribe( res=> {
        console.log(res);
        this.serviceService.filter('added click');
    this.form.reset();
    Swal.fire(
      'Tenant added successfully!',
      '',
      'success'
    )

      })
    }

  
      
  }
   

  getTenantDetails(){
    this.serviceService.getTenantDetails().subscribe((res:any)=>{
      this.tenantDetails = res.data;
     
    }
    
    );
  } 

  deleteTen(id){
   


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceService.deleteTenant(id).subscribe( (res:any)=>{
          this.getTenantDetails();
          
        
        });
      
        Swal.fire(
          'Deleted!',
          'Tenant has been deleted.',
          'success'
        )
      }
    })
  }

  editTen(tenant){
   this.userObj = tenant;
   this.isEdit =true;
 
  // this.sharedData.updateSharedData(tenant);
  // this.router.navigate(['superadmin/edit',{id:tenant._id}]);
  }

  updateTen(){
   
    this.serviceService.updateTenant(this.userObj).subscribe(()=>{

   Swal.fire(
    'Success!',
    'Tenant has Updated.',
    'success'
  )
    })
  }



}
