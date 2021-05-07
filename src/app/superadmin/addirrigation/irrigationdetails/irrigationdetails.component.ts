import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-irrigationdetails',
  templateUrl: './irrigationdetails.component.html',
  styleUrls: ['./irrigationdetails.component.css']
})
export class IrrigationdetailsComponent implements OnInit {

  userObj ={
    name: "",
    watering_duration: "",
    irrigation_ping_interval: "",
    last_ping_date: "",
    last_ping_time: "",
    water_usage: "",
    sync_system_date: "",
    sync_system_time: "",
    irrigation_unit_cluster: "",
    irrigation_unit_latitude: "",
    irrigation_unit_longitude: "",
    payload: "",
    schedule: "",
    valve:"",
    vent_type: "",
    strega_URL: "",
    status: "",
    plant_name: "",
   }

  constructor(
    private router : ActivatedRoute,
    private sharedData : SharedService
  ) { }

  ngOnInit(): void {
    this.sharedData.currentSharedData.subscribe(res =>{ 
      this.userObj={

        name:  res['name'],
      
        watering_duration:  res['watering_duration'],
        irrigation_ping_interval:  res['irrigation_ping_interval'],
        last_ping_date:  res['last_ping_date'],
        last_ping_time: res['last_ping_time'],
        water_usage: res['water_usage'],
        sync_system_date: res['sync_system_date'],
        sync_system_time: res['sync_system_time'],
        irrigation_unit_cluster:  res['irrigation_unit_cluster'],
        irrigation_unit_latitude: res['irrigation_unit_latitude'],
        irrigation_unit_longitude:  res['irrigation_unit_longitude'],
        payload: res['payload'],
        schedule:  res['schedule'],
        valve: res['valve'],
        vent_type:  res['vent_type'],
        strega_URL:  res['strega_URL'],
        status: res['status'],
        plant_name: res['plant_name'],
 

          }
          console.log(res);
        

    })
  }
  }


