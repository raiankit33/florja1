import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  U_ID:any;
  Name:any;
  Email:any;
  Permission:any;

  constructor(    private serviceService : ServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

 
  onAddSubmit(){

    const user = {

      U_ID: this.U_ID,
      Name:this.Name,
      Email: this.Email,
      Permission: this.Permission,
     
    }
console.log(user);
    this.serviceService.registerUser(user).subscribe( res=> {
      console.log(res);
      this.router.navigate(['home/users']);
    })

      
  }
   
  

}
