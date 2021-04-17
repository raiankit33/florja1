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
  isEdit = false;
  p: number = +1;

  userDetails: [];

  userObj = {

    name: "",
    email: "",
    phone: "",
    permission: ""
  };

  constructor(private subadminService: SubadminService,
    private router: Router) {
    this.subadminService.listen().subscribe((m: any) => {
      console.log(m);
      this.getUserDetails();
    })
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  openModel() {
    this.isEdit = false;
  }

  onAddSubmit() {
    if (this.form.valid) {

      this.subadminService.registerUser(this.form.value).subscribe(res => {
        console.log(res);
        this.subadminService.filter('added click');
        this.form.reset();
        Swal.fire(
          'User added successfully!',
          '',
          'success'
        )
      })

    }
  }



  getUserDetails() {
    this.subadminService.getUserDetails().subscribe((res: any) => {
      this.userDetails = res.data;

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
    this.isEdit = true;

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
