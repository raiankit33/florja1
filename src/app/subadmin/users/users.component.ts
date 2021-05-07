import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubadminService } from '../../service/subadmin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //  user = [{ id: '31d322eca5cd404ab437c39451df5c1e', name: 'test', email: 'test', phone: 'Test', permission: 'User' }];

  form = new FormGroup({

    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    permission: new FormControl('All Access', Validators.required),


  })


  
  p: number = +1;
count=5;
  userDetails: [];

  userObj = {

    name: "",
    email: "",
    phone: "",
    permission: ""
  };
  error: string;
  user: any;
  AuthToken: any;
  tenant = false;
  editTenant = false;

  constructor(private subadminService: SubadminService,
    private router: Router) {
    this.subadminService.listen().subscribe((m: any) => {
      console.log(m);
      this.getUserDetails();
    })
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.getUserDetails();
    if (this.user.permission == 'ALL') {
      this.tenant = true;
    } else {
      if (this.user.permission == 'VIEW') {
        this.tenant = false
      } else if (this.user.permission == 'EDIT') {

        this.editTenant = true;
      } 
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

  onAddSubmit() {
    if (this.form.valid) {
      let createUserPayload = {

        id: this.user.id,
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone,
        permission: this.form.value.permission
      }
      console.log(createUserPayload);
      this.subadminService.registerUser(createUserPayload).subscribe(res => {
        console.log(res);
        this.subadminService.filter('');
        this.form.reset();
        Swal.fire(
          'User added successfully!',
          '',
          'success'
        )
      })

    } else {
      this.validateAllFormFields(this.form);
    }
  }



  getUserDetails() {
    let createToken = {
      AuthToken: this.user.token,
      t_id: this.user.id
    }
    this.subadminService.getUserDetails(createToken).subscribe((res: any) => {
      this.userDetails = res.data;

    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }


  deleteUser(id) {
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
        this.subadminService.deleteUser(id).subscribe((res: any) => {
          this.getUserDetails();


        });

        Swal.fire(
          'Deleted!',
          'Tenant has been deleted.',
          'success'
        )
      }
    })
  }



  editUser(user) {
    this.userObj = user;
    

    // this.sharedData.updateSharedData(tenant);
    // this.router.navigate(['superadmin/edit',{id:tenant._id}]);
  }
  updateUser() {
    this.subadminService.UpdateUser(this.userObj).subscribe(() => {
      Swal.fire(
        'Success!',
        'User has Updated.',
        'success'
      )
    })
  }


}
