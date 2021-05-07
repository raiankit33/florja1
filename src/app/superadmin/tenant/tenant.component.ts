import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { SharedService } from "../../service/shared.service";
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  p: number = 1;
  count: number = 5;
  index: any;

  isEdit = false;
  tenantDetails = [];
  tenant: any;
  statusCode: string;


  userObj = {
    id: "",
    name: "",
    email: "",
    phone: "",
  
  };
  name: any;
  error: string;
  user: any;
  err: string;
  open = false;
  message: string;
  mess = false;
  parent = false;
  editParent=false;

  constructor(
    private serviceService: ServiceService,
    private sharedData: SharedService,
    private router: Router
  ) {
    this.serviceService.listen().subscribe((m: any) => {
      console.log(m);
      this.getTenantDetails();
    })
  }

 

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getTenantDetails();
  
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


  
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),

  })

  key: string = "tenant_id";
  reverse: boolean;


  sortData(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  openModel() {
    this.isEdit = false;

  }

 

  Search() {
    if (this.name == "") {
      this.getTenantDetails();
    } else {
      this.tenantDetails = this.tenantDetails.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
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

  refresh() {
    this.form.reset()
  }

  onAddSubmit() {
    if (this.form.valid) {
      const tenant = {
        id: this.user.id,
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone,
        t_name: this.form.value.t_name,
       

      }
      this.serviceService.registerTenant(tenant).subscribe((data: any) => {
        if (data.statusCode == 200) {
          this.form.reset();
          this.serviceService.filter('');
          Swal.fire(
            'Tenant added successfully!',
            '',
            'success'
          )

        } else if (data.statusCode == 403) {
          this.err = "This email is already registered. ",
            this.open = true;
          setTimeout(() => {
            this.open = false
          }, 3000);
        } else {
          this.message = "This Phone no is already registered.",
            this.mess = true;
          setTimeout(() => {
            this.mess = false
          }, 3000);
        }
      })
    } else {
      this.validateAllFormFields(this.form);
    } (error) => {

    }
  }

  close() {

  }

  parentF(parent){
    if(parent == 'null'){
      return null
    }else{
      return parent
    }
  }

  getTenantDetails() {
    let createToken ={
      AuthToken:this.user.token,

    }
    this.serviceService.getTenantDetails(createToken).subscribe((res: any) => {
      this.tenantDetails = res.data;
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }
    );
  }


  timer() {
    setTimeout(() => {
      console.log("Hello from setTimeout");
    }, 1000);
  }

  deleteTen(id) {
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
        this.serviceService.deleteTenant(id).subscribe((res: any) => {
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

  editTen(tenant) {
    this.userObj = tenant;
    this.isEdit = true;

    // this.sharedData.updateSharedData(tenant);
    // this.router.navigate(['superadmin/edit',{id:tenant._id}]);
  }

  updateTen() {
    this.serviceService.updateTenant(this.userObj).subscribe(() => {
      Swal.fire(
        'Success!',
        'Tenant has Updated.',
        'success'
      )
    })
  }



}
