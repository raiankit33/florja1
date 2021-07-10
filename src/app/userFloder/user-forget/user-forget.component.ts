import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { SubadminService } from 'src/app/service/subadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-forget',
  templateUrl: './user-forget.component.html',
  styleUrls: ['./user-forget.component.css']
})
export class UserForgetComponent implements OnInit {
  constructor(
    private router: Router,
    private Service : ServiceService,
  ) { }

  ngOnInit(): void {
  }

  form = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),


  })

  onForget(){
    let f ={
      email : this.form.value.email
    }

    this.Service.aForget(f).subscribe((res:any)=>{

      if(res.statusCode == 200){
        this.router.navigate(['login'])
         Swal.fire({
         
           icon: 'success',
           title: 'Password send successfully to your mail Id',
           showConfirmButton: false,
           timer: 2000  
         })
        }else{
         Swal.fire({
         
          
           title: 'Wrong Email ',
           showConfirmButton: false,
           timer: 3000
         })
        }
    })
  }


  back(){
    this.router.navigate(['/']);
  }
}

