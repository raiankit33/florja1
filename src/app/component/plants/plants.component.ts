import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  plantDetails = [];
 name:any;
 p: number ;

  constructor(
    private userService : UserService,
    private router: Router, )
  {
    this.userService.listen().subscribe((m:any)=>{
      console.log(m);
      this.getPlantDetails();
    })
   }



  ngOnInit(): void {
    this.getPlantDetails();
  }

  plants(){
    this.router.navigate(['home/details']);
  }


  form = new FormGroup({
    // P_ID: new FormControl(''),
    P_name: new FormControl('',Validators.required),
    // Air_humidity_min: new FormControl('',[Validators.required]),
    // Air_humidity: new FormControl(null, [Validators.required,]),
    // Permission: new FormControl('All Access',Validators.required),
   

  })


  Search(){
    if(this.name == ""){
      this.getPlantDetails();
    }else{
      this.plantDetails = this.plantDetails.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  onAddSubmit(){

    if(this.form.valid){

    this.userService.registerPlant(this.form.value).subscribe( res=> {
      console.log(res);
      this.userService.filter('added click');
      this.form.reset();
      Swal.fire(
        'Plant has added successfully!',
        '',
        'success'
      )
    })

  } 
  }

  getPlantDetails(){
    this.userService.getPlantDetails().subscribe((res:any)=>{
      this.plantDetails = res.data;
     
    }
    
    );
  } 

  deletePlant(P_ID){
   
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
        this.userService.deletePlant(P_ID).subscribe( (res:any)=>{
          this.getPlantDetails();
          
        
        });
      
        Swal.fire(
          'Deleted!',
          'Tenant has been deleted.',
          'success'
        )
      }
    })
  }
   

}
