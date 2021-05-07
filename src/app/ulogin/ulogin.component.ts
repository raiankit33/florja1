import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {
  error = 'server error';

  email: String;
  password: String;
 

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    

  })

  onLoginSubmit() {
    // const user = {
    //   email: this.email,
    //   password: this.password

    // }
    if(this.form.valid){
    this.authService.authenticateUser(this.form.value)
      .subscribe(
        (data) => {
          if(data.statusCode==200){
            // localStorage.setItem('AuthToken', data.token);
            this.authService.storeUserData(data.token, data.user);
            this.toastr.success('Success ! logged In');
            this.router.navigate(['user/dashboad']);
        
          } else {
            console.log('error');
            this.toastr.error('Oops','Failed to logged In');
            this.router.navigate(['login']);
          }
        },
        (error) => {
          console.log(error);


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

