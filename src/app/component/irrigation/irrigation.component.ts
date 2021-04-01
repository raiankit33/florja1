import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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


   adhoc(){
  Swal.fire({
   
    text: "are you sure you want to start one irrigation cycle? Irrigation black-out times will not be considered and irrigation will start at next cycle !!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText:'No'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        
      
        'success'
      )
    }
  })
   }
  
}
