import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irrigation',
  templateUrl: './irrigation.component.html',
  styleUrls: ['./irrigation.component.css']
})
export class IrrigationComponent implements OnInit {

  isEdit =false;
checks = false;
  constructor() { }

  ngOnInit(): void {
  }

  bulk(e){
    if(e.target.checked == true){
      this.checks = true;
    }
    else{
      this.checks = false;
      this.isEdit = false;
    }

  }

  powerButton(){
    this.isEdit = true;
  }

}
