import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizations',
  templateUrl: './visualizations.component.html',
  styleUrls: ['./visualizations.component.css']
})
export class VisualizationsComponent implements OnInit {

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
