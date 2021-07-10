import { Component, ElementRef, OnInit , Inject, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-florja',
  templateUrl: './florja.component.html',
  styleUrls: ['./florja.component.css']
})
export class FlorjaComponent implements OnInit , AfterViewInit{

  user: any;
  admin:boolean = false;
  tenant:boolean =false;
  users:boolean =false;
  academia :boolean =false
  hideTenant: boolean =false;
  hideAdminUser: boolean =false;
  constructor(
    @Inject(DOCUMENT) private document,
    private elementRef: ElementRef,
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


  ngAfterViewInit() {
    const s = this.document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateFunction';
    const __this = this;
                       
    s.onload = function () { __this.afterScriptAdded(); };
    this.elementRef.nativeElement.appendChild(s);
  }

  onLogoutClick(){
    this.authService.logout();
    
    this.router.navigate(['/adminlogin']);
    return false;
}

afterScriptAdded() {
  const params= {
    width: '350px',
    height: '420px',
  };
  if (typeof (window['functionFromExternalScript']) === 'function') {
    window['functionFromExternalScript'](params);
  }
}


userN(){
  this.router.navigate(['florja/userN']);
}

}
