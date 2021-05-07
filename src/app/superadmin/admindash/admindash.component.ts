import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  show: any;
  message: any;

  constructor() { }

  ngOnInit(): void {

    var myChart = new Chart('myChart', {
      type: 'pie',
      data: {
          labels: ['GPS Sensor', 'Moist Sensor', 'Weather sensor', 'water Sensor', ],
          datasets: [{
              label: 'Sensors',
              data: [5,3,6,2],
              fill: true,
              backgroundColor:[  'rgba(25, 99, 132, 1)',
              'rgba(25, 9, 12, 1)',
              'rgba(255, 99, 32, 1)',
              'rgba(255, 9, 132, 1)',],
              borderColor: [
                'rgba(255,255,255)',
              ],
              borderWidth: 3
            

          }
        ]
      },
        

         
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });




  }


  }


