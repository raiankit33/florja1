import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedService} from '../../../service/shared.service'

@Component({
  selector: 'app-plantdetail',
  templateUrl: './plantdetail.component.html',
  styleUrls: ['./plantdetail.component.css']
})
export class PlantdetailComponent implements OnInit {

  constructor(
    // private driverService : DriverService,
    private router : ActivatedRoute,
    private sharedData : SharedService
  ) { }

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


  ngOnInit(): void {

    this.sharedData.currentSharedData.subscribe(res =>{ 
      this.userObj={

        name:  res['name'],
        soil_humidity_min: res['soil_humidity_min'],
        soil_humidity_max:  res['soil_humidity_max'],
        soil_temp_max:  res['soil_temp_max'],
        soil_temp_min:  res['soil_temp_min'],
        air_humidity_min: res['air_humidity_min'],
        air_humidity_max: res['air_humidity_max'],
        ec_min: res['ec_min'],
        ec_max: res['ec_max'],
        air_temp_max:  res['air_temp_max'],
        air_temp_min: res['air_temp_min'],
        fertilization_interval:  res['fertilization_intervald'],
        autumn_end: res['autumn_end'],
        autumn_start:  res['autumn_start'],
        spring_end: res['spring_end'],
        spring_start:  res['spring_start'],
        summer_end:  res['summer_end'],
        summer_start: res['summer_start'],
        winter_end: res['winter_end'],
        winter_start:  res['winter_start'],

          }
          console.log(res);
        

    })
  }



}
