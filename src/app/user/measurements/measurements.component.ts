import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  constructor(
    private userService : UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  mDetails(){
    this.router.navigate(['user/measureDetail']);
  }

  secondDetails(){
    this.router.navigate(['user/secondDetail']);
  }

  thirdDetails(){
    this.router.navigate(['user/thirdDetail']);
  }

  fourthDetails(){
    this.router.navigate(['user/fourthDetail']);
  }

}
