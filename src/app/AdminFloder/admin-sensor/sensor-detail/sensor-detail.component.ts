import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css']
})
export class SensorDetailComponent implements OnInit {


  userObj ={
    plant_name: "",
sensor_type: " ",
sensor_type_id: "",
status: "",
data:{
   current :{
    feelslike_c: "",
    feelslike_f: "",
    gust_kph: "",
    gust_mph: "",
    humidity: "",
    is_day: "",
    last_updated: "",
    last_updated_epoch: "",
    precip_in: "",
    precip_mm: "",
    pressure_in: "",
    pressure_mb:"",
    temp_c: "",
    temp_f: "",
    uv: "",
    vis_km: "",
    vis_miles: "",
    wind_degree: "",
    wind_dir: "",
    wind_kph: "",
    wind_mph:"",
    country: "",
    lat: "",
   },
    location :{
    localtime: "",
    localtime_epoch: "",
    lon: "",
    name: "",
    region: "",
    tz_id: "",
    },
  }
   }

  constructor(
    private router : ActivatedRoute,
    private sharedData : SharedService
  ) { }

  ngOnInit(): void {
    this.sharedData.currentSharedData.subscribe((res:any) =>{ 

      this.userObj = res;
      // this.userObj={

      
      //   feelslike_c: res['feelslike_c'],
      //   feelslike_f: res['feelslike_f'],
      //   gust_kph: res['gust_kph'],
      //   gust_mph: res['gust_mph'],
      //   humidity: res['humidity'],
      //   is_day: res['is_day'],
      //   last_updated: res['last_updated'],
      //   last_updated_epoch:res['last_updated_epoch'],
      //   precip_in: res['precip_in'],
      //   precip_mm: res['precip_mm'],
      //   pressure_in:res['pressure_in'],
      //   pressure_mb:res['pressure_mb'],
      //   temp_c: res['temp_c'],
      //   temp_f: res['temp_f'],
      //   uv: res['uv'],
      //   vis_km: res['vis_km'],
      //   vis_miles:res['vis_miles'],
      //   wind_degree: res['wind_degree'],
      //   wind_dir: res['wind_dir'],
      //   wind_kph: res['wind_kph'],
      //   wind_mph:res['wind_mph'],
      //   country: res['country'],
      //   lat: res['lat'],
      //   localtime:res['localtime'],
      //   localtime_epoch:res['localtime_epoch'],
      //   lon: res['lon'],
      //   name: res['name'],
      //   region:res['region'],
      //   tz_id: res['tz_id'],
      //   plant_name: res['plant_name'],
      //   sensor_type: res['sensor_type'],
      //   sensor_type_id:res['sensor_type_id'],
      //   status: res['status'],
 

      //     }
          console.log(res,"ee");
        console.log(this.userObj,"user")

    })
  }
  }



