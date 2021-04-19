import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

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
    private router: Router,) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password

    }

    this.authService.authenticateUser(user)
      .subscribe(
        (data) => {
          if (data) {
            // localStorage.setItem('userToken', data.token);
            this.authService.storeUserData(data.token, data.user);
            this.router.navigate(['user/dashboad']);
            alert('Success ! logged In')
          } else {
            console.log('error');
            alert("fail to logged In")
            this.router.navigate(['login']);
          }
        },
        (error) => {
          console.log(error);


        }
      );
  }

}




class Response {
  success: string;
  token: string;
  user: Object;
  msg: string;
}

