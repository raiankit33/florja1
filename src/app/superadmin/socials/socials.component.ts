import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  showMe :boolean =false;
  public imagePath;
  imgURL: any;
  public message: string;
 
  constructor() { }

  ngOnInit(): void {
  }

  toggleTag(){
    this.showMe =!this.showMe
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}
