import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-irrigations',
  templateUrl: './irrigations.component.html',
  styleUrls: ['./irrigations.component.css']
})
export class IrrigationsComponent implements OnInit {

  isEdit =false;
checks = false;
  irrigationDetails =[];

  active:boolean = true;
  Inactive:boolean = false;
  allMember:boolean = false;


  user: any;
  constructor(
    private userService : UserService,
    private router: Router,) {
      this.userService.listen().subscribe((m:any)=>{
        console.log(m);
        this.getIrrigationDetails();
      })
     }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getIrrigationDetails();
  }

  form = new FormGroup({
 
    name: new FormControl('',Validators.required),
    // Air_humidity_min: new FormControl('',[Validators.required]),
    // Air_humidity: new FormControl(null, [Validators.required,]),
    // Permission: new FormControl('All Access',Validators.required),
   

  })

  bulk(e){
    if(e.target.checked == true){
      this.checks = true;
    }
    else{
      this.checks = false;
      this.isEdit = false;
    }

  }

  powerButton(){
    this.isEdit = true;
  }


   adhoc(){
  Swal.fire({
   
    text: "are you sure you want to start one irrigation cycle? Irrigation black-out times will not be considered and irrigation will start at next cycle !!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText:'No'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        
      
        'success'
      )
    }
  })
   }

   onAddSubmit(){

    if(this.form.valid){

    this.userService.registerIrrigation(this.form.value).subscribe( res=> {
      console.log(res);
      this.userService.filter('added click');
      this.form.reset();
      Swal.fire(
        'Irrigation has added successfully!',
        '',
        'success'
      )
    })

  } 
  }

  AllData(){
    this.allMember = true;
    this.active =false;
    this.Inactive =false;
     }
   
     ActiveTab(){
   this.active =true;
   this.Inactive =false;
   this.allMember =false;
     }
   
     InActiveTab(){
     this.Inactive =true;
     this.active =false;
     this.allMember =false;
     }

  getIrrigationDetails(){
    let token ={
      AuthToken : this.user.token
    }
    this.userService.getIrrigationDetails().subscribe((res:any)=>{
      this.irrigationDetails = res.data;
     
    }
    
    );
  } 

  deleteIrrigation(id){
   
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteIrrigation(id).subscribe( (res:any)=>{
          this.getIrrigationDetails();
          
        
        });
      
        Swal.fire(
          'Deleted!',
          ' Deleted .',
          'success'
        )
      }
    })
  }
  
}
