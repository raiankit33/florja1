import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(
    private router: Router,
    private Service : ServiceService,
  ) { }

  ngOnInit(): void {
  }

  form = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),



  })


  onForget(){
    let f ={
      email : this.form.value.email
    }

    this.Service.aForget(f).subscribe((res:any)=>{
      if(res.statusCode == 200){
        this.router.navigate(['adminlogin'])
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
    this.router.navigate(['adminlogin']);
  }
}
