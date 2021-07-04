import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { SubadminService } from 'src/app/service/subadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  form = new FormGroup({
  
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    permission: new FormControl('All Access', Validators.required),
    id: new FormControl('', Validators.required),


  })

  
  isEdit = false;
  p: number = 1;
  count : number = 5;
  active: Boolean = true;
  Inactive: boolean = false;
  allMember : boolean =false;
  userDetails :any = [];

 
  error: string;
  user: any;
  AuthToken: any;
  tenantDetails: any;
  err: string;
  open= false;
  mess =false;
  message: string;
  parent=false;
  editParent= false;

  userObj = {

    name: "",
    email: "",
    phone: "",
    id:"",
    permission: ""
  };
  InactiveDetail = [];
  Details = [];

  constructor(
    private serviceService : ServiceService,
   
    private router: Router) {
 
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    
    this.getUserDetails();
    this.getTenantDetails();
  
    // this.parent_id= this.user.parent_id;
    if(this.user.permission=='all' && this.user.parent_id=="owner"){
      this.parent = true;
        }else{
         if (this.user.permission=='VIEW') {
           this.parent = false
         } else if (this.user.permission=='EDIT') {
          
           this.editParent =true;
         }
        }
  }

  openModel() {
    this.isEdit = false;
  }


  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}

refresh(){
  this.form.reset();
}


AllData(){
  this.allMember = true;
  this.active =false;
  this.Inactive =false;
   }
 
   ActiveTab(){
 this.active =true;
 this.Inactive =false;
 this.allMember =false;
   }
 
   InActiveTab(){
   this.Inactive =true;
   this.active =false;
   this.allMember =false;
   }
   

  onAddSubmit() {
    if (this.form.valid) {
  let createUserPayload = {
  
  
    name: this.form.value.name,
    email: this.form.value.email,
    phone:this.form.value.phone,
    id:this.form.value.id,
    permission:this.form.value.permission,
    AuthToken:this.user.token,
    
  }
  

      this.serviceService.registerUser(createUserPayload).subscribe( (res:any) => {
        if (res.statusCode== 200) {
         
        this.getUserDetails();
        this.form.reset();
        Swal.fire(
          'User added successfully!',
          '',
          'success'
        )
        }else if(res.statusCode== 403){
          this.err = "This email is already registered."
          this.open = true;
          setTimeout(() => {
            this.open = false
          }, 3000);
        }else{
          this.message = "This Phone no is already registered."
          this.mess = true;
          setTimeout(() => {
            this.mess = false
          }, 3000);
        }
      })

    }else{
      this.validateAllFormFields(this.form);
    }
  }




  getUserDetails() {
    let createToken ={
      AuthToken:this.user.token,

    }
    this.serviceService.getUserDetails(createToken).subscribe((res: any) => {
      this.Details = res.data;
console.log(res,"user")
      this.userDetails = this.Details.filter(data => data.status == 'Active');

      this.InactiveDetail = this.Details.filter(data => data.status == 'Inactive' );
      if(res.statusCode==404){
        this.error = "Token Mismatch "
      }

    },(error)=> {
      this.error = 'Server Down Please try After Sometime ..! ';
      Swal.fire({
        icon: 'error',
        title: 'Token mismatch',
        text: 'Please try again!',
        
      })
    }

    );
  }

getSort(a,b){
     if(a.created_at > b.created_at){
      return 1
     }
    
 
}

// public loadedScript(url) {
//   let node = document.createElement('script');
//   node.src = url;
//   node.type ="text/javascript";
//   document.getElementsByTagName('head')[0].appendChild(node);
// }

  deleteUser(user) {
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
        let createToken = {
          id : user.id,
          AuthToken : this.user.token,
          status: "Inactive"
        }
        this.serviceService.deleteUser(createToken).subscribe((res: any) => {
          this.getUserDetails();
          Swal.fire(
            'Deleted!',
            'Tenant has been deleted.',
            'success'
          )

        });

      
      }
    })
  }

 
  ActicateUser(user) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Activate this User!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Activate!'
    }).then((result) => {
      if (result.isConfirmed) {
        let createToken = {
          id : user.id,
          AuthToken : this.user.token,
          status: "Active"
        }
        this.serviceService.deleteUser(createToken).subscribe((res: any) => {
          this.getUserDetails();
          Swal.fire(
            'Success!',
            'user Active.',
            'success'
          )

        });

      
      }
    })
  }


  editUser(user) {
    this.userObj = user;
    this.isEdit = true;

    // this.sharedData.updateSharedData(tenant);
    // this.router.navigate(['superadmin/edit',{id:tenant._id}]);
  }
  updateUser() {
    let createToken ={
      AuthToken:this.user.token,

    }
    this.serviceService.UpdateUser(this.userObj).subscribe(() => {
      Swal.fire(
        'Success!',
        'User has Updated.',
        'success'
      )
    })
  }


  getTenantDetails(){
    let createToken ={
      AuthToken:this.user.token,

    }
    this.serviceService.getTenantDetails(createToken).subscribe((res:any)=>{
      this.tenantDetails = res.data;
     
    },(error)=> {
      this.error = 'Server Down Please try After Sometime ..! '
    }
    );
  } 


}

