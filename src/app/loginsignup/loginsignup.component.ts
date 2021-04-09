import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent implements OnInit {

  constructor() { }

  Form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
 
  })

  ngOnInit(): void {


  }

}
