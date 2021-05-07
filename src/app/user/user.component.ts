import { Component, OnInit } from '@angular/core';

import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;

  constructor(   private authService: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  onLogoutClick(){
    this.authService.logout();
    
    this.router.navigate(['/']);
    return false;
}

}
