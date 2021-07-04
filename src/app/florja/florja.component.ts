import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-florja',
  templateUrl: './florja.component.html',
  styleUrls: ['./florja.component.css']
})
export class FlorjaComponent implements OnInit {

  user: any;
  admin:boolean = false;
  tenant:boolean =false;
  users:boolean =false;
  academia :boolean =false
  hideTenant: boolean =false;
  hideAdminUser: boolean =false;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user.role == 'SuperAdmin' ){
      this.admin = true;
      this.hideAdminUser = true;
      this.tenant =false;
      this.users =false;
      this.academia =false
    }else if(this.user.role == 'SubAdmin' ){
      this.admin = true;
      this.hideAdminUser = false;
      this.tenant =false;
      this.users =false;
      this.academia =false
    }  else if (this.user.role == 'Tenant'  ){
      this.tenant =true;
      this.hideTenant =true;
      this.admin =false;
      this.users =false;
    } else if(this.user.role == 'SubTenant' ){
      this.tenant =true;
      this.hideTenant =false
      this.admin =false;
      this.users =false;
      this.academia =false
    }
     else if(this.user.role == 'Academia' ) {
      this.academia =true;
      this.users =false;
      this.tenant =false;
      this.admin =false;
     
    }
    else if(this.user.role == 'user'){
      this.users =true;
      this.tenant =false;
      this.admin =false;
      this.academia =false;
     
    }
  }

  onLogoutClick(){
    this.authService.logout();
    
    this.router.navigate(['/adminlogin']);
    return false;
}


userN(){
  this.router.navigate(['florja/userN']);
}

}
