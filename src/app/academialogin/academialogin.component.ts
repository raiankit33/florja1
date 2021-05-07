import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-academialogin',
  templateUrl: './academialogin.component.html',
  styleUrls: ['./academialogin.component.css']
})
export class AcademialoginComponent implements OnInit {
  error :string;

  email: String;
  password: String;

  constructor(
    private authService: AuthService,


    private router: Router,) { }

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
    this.authService.authenticateAcademia(this.form.value)
      .subscribe(
        (data) => {
          if(data.statusCode==200){
            this.authService.storeUserData(data.token, data.user);
          this.router.navigate(['']);
          alert('Success ! logged In')
          }else{
            console.log('error');
            alert("fail to logged In")
            this.router.navigate(['login']);
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

