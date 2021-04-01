import { Component, OnInit } from '@angular/core';
import {Chart} from "chart.js";
 
declare var bar:any;


@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  chart =[];
  constructor() { }

  ngOnInit(): void {
    this.loadedScript("./assets/js/chart.js");
    this.loadedScript("./assets/js/multi.js");

  }

  public loadedScript(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type ="text/javascript";
    document.getElementsByTagName('head')[0].appendChild(node);
  }
 
 
 
}
