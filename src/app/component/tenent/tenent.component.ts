import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenent',
  templateUrl: './tenent.component.html',
  styleUrls: ['./tenent.component.css']
})
export class TenentComponent implements OnInit {

  constructor() { }

  p: number = 1;
  tenant =[];

  ngOnInit(): void {
  }

}
