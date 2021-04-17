import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-tenantlogin',
  templateUrl: './tenantlogin.component.html',
  styleUrls: ['./tenantlogin.component.css']
})
export class TenantloginComponent implements OnInit {


  email: String;
password: String;
  alert: any;

  constructor( 
      private authService: AuthService,
    private router : Router,) 
    { }

  ngOnInit(): void {
  }


  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password
       
    }

    this.authService.authenticateUser(user).subscribe((data: Response) => {

      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.alert.show('you are now logged in',
          {cssClass: 'alert-success',
         timeout:5000 });
         this.router.navigate(['main']);

      }else{
        this.alert.show(data.msg,
       {cssClass: 'alert-danger',
      timeout:5000 });
      this.router.navigate(['login']);
      }
    })
  }

}

class Response {
  success: string;
  token: string;
  user: Object;
  msg: string;
}