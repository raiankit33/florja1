import { Component, OnInit } from '@angular/core';

declare const chartContainer,  mContainer: any;

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {

  lat :number = 28.5355;
  long : number = 77.3910;

  constructor() { }

  ngOnInit(): void {
    new chartContainer();
     new mContainer();
     


     
  }


}
