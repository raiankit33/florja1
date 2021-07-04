import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { SharedService } from 'src/app/service/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-sentype',
  templateUrl: './admin-sentype.component.html',
  styleUrls: ['./admin-sentype.component.css']
})
export class AdminSentypeComponent implements OnInit {

  searchString:any;
  p: number = 1;
  count: number = 5;
  index: any;
  isEdit = false;
  sensorDetails = [];
  tenant: any;
  name: any;
  error: string;
 

  active:boolean = true;
  Inactive:boolean = false;
  allMember:boolean = false;



  userObj = {
    name: "",
    sensor_type: "",
    sensor_code: "",
    manufacture: "",
    sensor_description: ""
  };
  user: any;
  parent =false;
  editParent= false;
  activeDetails: any[];
  InactiveDetails: any[];

  constructor(
    private serviceService: ServiceService,
    private sharedData: SharedService,
    private router: Router
  ) {

  }



  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getSensorDetails();
    

    if(this.user.permission=='all' && this.user.parent_id=="owner"){
      this.parent = true;
        }else{
         if (this.user.permission=='VIEW') {
           this.parent = false
         } else if (this.user.permission=='EDIT') {
          
           this.editParent =true;
         }
        }
     
  }



  form = new FormGroup({
    name: new FormControl('', Validators.required),
    sensor_type: new FormControl('', Validators.required),
    sensor_code: new FormControl('', Validators.required),
    manufacture: new FormControl(null, Validators.required),
    sensor_description: new FormControl('', Validators.required),
  })

  key: string = "tenant_id";
  reverse: boolean;


  sortData(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  openModel() {
    this.isEdit = false;

  }

  // Search(){
  //   if(this.name == ""){
  //     this.getSensorDetails();
  //   }else{
  //     this.sensorDetails = this.tenantDetails.filter(res =>{
  //       return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //     })
  //   }
  // }


  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }

  refresh() {
    this.form.reset();
  }



  onAddSubmit() {
    if (this.form.valid) {
      let type = {
        name:this.form.value.name,
        sensor_type:this.form.value.sensor_type,
        sensor_code:this.form.value.sensor_code,
        manufacture: this.form.value.manufacture,
        sensor_description: this.form.value.sensor_description,
        AuthToken : this.user.token
      }
      this.serviceService.addSensor(type).subscribe(res => {
        console.log(res);
      this.getSensorDetails();
        this.form.reset();
        Swal.fire(
          'Sensor has added successfully!',
          '',
          'success'
        )
      })
    } else {
      this.validateAllFormFields(this.form);
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



  getSensorDetails() {
    let createToken ={
      AuthToken:this.user.token,
      
    }
    this.serviceService.getSensorDetails(createToken).subscribe((res: any) => {
      this.sensorDetails = res.data;

      this.activeDetails = this.sensorDetails.filter(data => data.status === 'Active');

      this.InactiveDetails = this.sensorDetails.filter(data => data.status == 'Inactive' );


    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }
    );
  }

  deleteSensor(id) {
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
          id: id ,
          AuthToken : this.user.token,
          status :"Inactive"
        }
        this.serviceService.deleteSensorType(d).subscribe((res: any) => {
          this.getSensorDetails();
          
        Swal.fire(
          'Deleted!',
          
          'success'
        )
        });

      }
    })
  }


  activateSensor(sen) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Activate this sensor type!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Activate!'
    }).then((result) => {
      if (result.isConfirmed) {
        let d ={
          id: sen.id ,
          AuthToken : this.user.token,
          status :"Active"
        }
        this.serviceService.deleteSensorType(d).subscribe((res: any) => {
          this.getSensorDetails();
          
          Swal.fire(
            'Success!',
            'Sensor type Active.',
            'success'
          )
        });

      }
    })
  }

  editSensor(tenant) {
    this.userObj = tenant;
    this.isEdit = true;

    // this.sharedData.updateSharedData(tenant);
    // this.router.navigate(['superadmin/edit',{id:tenant._id}]);
  }

  updateTen() {

    let u ={
      data : this.userObj,
      AuthToken : this.user.token
    }
    this.serviceService.updateSensorType(u).subscribe((res:any) => {
      
      if(res.statusCode == 200){
        Swal.fire(
          'Success!',
          'Sensor Updated.',
          'success'
        )
      }else {
      
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
       
        })
      }
   
    })
  }



}
