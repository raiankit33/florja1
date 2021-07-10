import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../service/user.service';
import { SharedService } from "../../service/shared.service";

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  plantDetails = [];
  name:any;
  isEdit=false;
  p: number =1 ;
  active:boolean = true;
  Inactive:boolean = false;
  allMember:boolean = false;

  userObj ={
    name: "",
    soil_humidity_min:"",
    soil_humidity_max: "",
    soil_temp_max: "",
    soil_temp_min: "",
    air_humidity_min:"",
    air_humidity_max: "",
    ec_min: "",
    ec_max:"",
    air_temp_max: "",
    air_temp_min: "",
    fertilization_interval: "",
    autumn_end: "",
    autumn_start: "",
    spring_end:"",
    spring_start: "",
    summer_end: "",
    summer_start:"",
    winter_end:"",
    winter_start: ""
  }
  user: any;
  activeDetails: any;
  InactiveDetail: any;
 
   constructor(
     private userService : UserService,
        private sharedData : SharedService,
     private router: Router, )
   {
     this.userService.listen().subscribe((m:any)=>{
       console.log(m);
       this.getPlantDetails();
     })
    }
 
 
 
   ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
     this.getPlantDetails();
   }
 
   plantPage(plant){
    this.sharedData.updateSharedData(plant);
   
    this.router.navigate(['user/pDetail',{id:plant.id}]);
     
   }
 
 
   form = new FormGroup({
     // P_ID: new FormControl(''),
     
     name: new FormControl('',Validators.required),
   
     soil_humidity_min: new FormControl('',Validators.required),
     soil_humidity_max: new FormControl('',Validators.required),
     soil_temp_max: new FormControl('',Validators.required),
     soil_temp_min: new FormControl('',Validators.required),
     air_humidity_min: new FormControl('',Validators.required),
     air_humidity_max: new FormControl('',Validators.required),
     ec_min: new FormControl('',Validators.required),
     ec_max: new FormControl('',Validators.required),
     air_temp_max: new FormControl('',Validators.required),
     air_temp_min: new FormControl('',Validators.required),
     fertilization_interval: new FormControl('',Validators.required),
     autumn_end: new FormControl('',Validators.required),
     autumn_start: new FormControl('',Validators.required),
     spring_end: new FormControl('',Validators.required),
     spring_start: new FormControl('',Validators.required),
     summer_end: new FormControl('',Validators.required),
     summer_start: new FormControl('',Validators.required),
     winter_end: new FormControl('',Validators.required),
     winter_start: new FormControl('',Validators.required),
     
 
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
 
   onAddSubmit(){
 
     if(this.form.valid){

      let createPlant ={
        id:this.user.id,
        name: this.form.value.name,
        soil_humidity_min: this.form.value.soil_humidity_min,
        soil_humidity_max: this.form.value.soil_humidity_max,
        soil_temp_max: this.form.value.soil_temp_max,
        soil_temp_min: this.form.value.soil_temp_min,
        air_humidity_min:this.form.value.air_humidity_min,
        air_humidity_max: this.form.value.soil_humidity_max,
        ec_min: this.form.value.ec_min,
        ec_max:this.form.value.ec_max,
        air_temp_max: this.form.value.air_temp_max,
        air_temp_min: this.form.value.air_temp_min,
        fertilization_interval: this.form.value.fertilization_interval,
        autumn_end: this.form.value.autumn_end,
        autumn_start: this.form.value.autumn_start,
        spring_end: this.form.value.spring_end,
        spring_start: this.form.value.spring_start,
        summer_end: this.form.value.summer_end,
        summer_start:this.form.value.summer_start,
        winter_end:this.form.value.winter_end,
        winter_start: this.form.value.winter_start
      }
  console.log(createPlant);
     this.userService.registerPlant(createPlant).subscribe( res=> {
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
    let createToken ={
      AuthToken:this.user.token,
      u_id:this.user.id
    }
     this.userService.getPlantDetails(createToken).subscribe((res:any)=>{
       this.plantDetails = res.data;

       this.activeDetails = this.plantDetails.filter(data => data.status == 'Active');

       this.InactiveDetail = this.plantDetails.filter(data => data.status == 'Inactive' );
      console.log(res)
     }
     
     );
   } 
 
   deletePlant(id){
    
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
         let d ={
           id : id,
           AuthToken : this.user.token
         }
         this.userService.deletePlant(d).subscribe( (res:any)=>{
           this.getPlantDetails();
           Swal.fire(
            'Deleted!',
            'Tenant  deleted.',
            'success'
          )
         
         });
       
        
       }
     })
   }
    

   
   editPlant(plant){
    this.userObj = plant;
    this.isEdit =true;
  
   // this.sharedData.updateSharedData(tenant);
   // this.router.navigate(['superadmin/edit',{id:tenant._id}]);
   }
 
   updateTen(){
    
     this.userService.updatePlant(this.userObj).subscribe(()=>{
 
    Swal.fire(
     'Success!',
     'plant  Updated.',
     'success'
   )
     })
   }
 
 
 }
 
