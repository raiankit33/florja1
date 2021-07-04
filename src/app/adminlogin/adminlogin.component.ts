import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  error: string;

  email: String;
  password: String;
  isLoading : boolean = false

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  form = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),


  })

  onLoginSubmit() {
  
    if (this.form.valid) {
      this.isLoading = true
      this.authService.authenticateAdmin(this.form.value)
        .subscribe(
          (data) => {
            if (data.statusCode == 200)   
            {
              if (data.user.parent_id == "owner") {
                this.isLoading =false
                this.authService.storeUserData(data.token, data.user);
                this.router.navigate(['florja/adminDash']);
               
                this.toastr.success('Success ! logged In');
              } else {
                this.isLoading =false
                this.authService.storeUserData(data.token, data.user);
                this.router.navigate(['florja']);
                this.toastr.success('Success ! logged In');
               
              }

            } else {
           
              this.isLoading =false
              this.toastr.error('Oops', 'Invalid Email/Password ');
              this.router.navigate(['adminlogin']);
            }
          },
          (error) => {
            this.error = 'Server Down Please try After Sometime ..! '


          }
        );
    }
  }

}




class Response {
  success: string;
  token: string;
  user: Object;
  msg: string;
}

