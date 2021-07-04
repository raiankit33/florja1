import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { SharedService } from 'src/app/service/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-plantdetail',
  templateUrl: './admin-plantdetail.component.html',
  styleUrls: ['./admin-plantdetail.component.css']
})
export class AdminPlantdetailComponent implements OnInit {
  user: any;
  tenantDetails: any;
  error: string;
  userDetails: any;

  constructor(
    // private driverService : DriverService,
    private router: ActivatedRoute,
    private serviceService: ServiceService,
    private sharedData: SharedService
  ) { }

  userObj = {
    id:"",
    name: "",
    soil_humidity_min: "",
    soil_humidity_max: "",
    soil_temp_max: "",
    soil_temp_min: "",
    air_humidity_min: "",
    air_humidity_max: "",
    ec_min: "",
    ec_max: "",
    air_temp_max: "",
    air_temp_min: "",
    fertilization_interval: "",
    autumn_end: "",
    autumn_start: "",
    spring_end: "",
    spring_start: "",
    summer_end: "",
    summer_start: "",
    winter_end: "",
    winter_start: "",
    latitude: "",
    longitude: "",
    t_name: "",
    u_id: "",
    t_id: "",
    status : "",
    updated_at :"",
    created_at:"",
    u_name: ""
  }


  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getTenantDetails();
    this.sharedData.currentSharedData.subscribe(res => {
      this.userObj = {

        name: res['name'],
        soil_humidity_min: res['soil_humidity_min'],
        soil_humidity_max: res['soil_humidity_max'],
        soil_temp_max: res['soil_temp_max'],
        soil_temp_min: res['soil_temp_min'],
        air_humidity_min: res['air_humidity_min'],
        air_humidity_max: res['air_humidity_max'],
        ec_min: res['ec_min'],
        ec_max: res['ec_max'],
        air_temp_max: res['air_temp_max'],
        air_temp_min: res['air_temp_min'],
        fertilization_interval: res['fertilization_interval'],
        autumn_end: res['autumn_end'],
        autumn_start: res['autumn_start'],
        spring_end: res['spring_end'],
        spring_start: res['spring_start'],
        summer_end: res['summer_end'],
        summer_start: res['summer_start'],
        winter_end: res['winter_end'],
        winter_start: res['winter_start'],
        longitude: res['longitude'],
        latitude: res['latitude'],
        u_id: res['u_id'],
        t_id: res['t_id'],
        t_name: res['t_name'],
        u_name: res['u_name'],
        created_at: res['created_at'],
        updated_at: res['updated_at'],
        status: res['status'],
        id: res['id'],

      }
      console.log(res);


    })
  }

  getTenantDetails() {
    let createToken = {
      AuthToken: this.user.token,

    }

    this.serviceService.getTenantDetails(createToken).subscribe((res: any) => {
      this.tenantDetails = res.data;

    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }
    );
  }


  onChange(event) {

    let eT = {
      id: event.target.value,

    }


    this.serviceService.getUser(eT).subscribe((res: any) => {
      this.userDetails = res.data;

    }

    );



  }



  updateTen() {
    let u = {
      data: this.userObj,
      AuthToken: this.user.token
    }

    this.serviceService.updatePlant(u).subscribe((res: any) => {

      if (res.statusCode == 200) {
        Swal.fire(
          'Success!',
          'plant Updated.',
          'success'
        )
      } else {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',

        })
      }


    })
  }

}
