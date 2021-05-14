import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, ReplaySubject } from 'rxjs';

import Swal from 'sweetalert2';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-sub-social',
  templateUrl: './sub-social.component.html',
  styleUrls: ['./sub-social.component.css']
})
export class SubSocialComponent implements OnInit {

  showMe: boolean = false;
  public imagePath;
  imgURL: any;
  public message: string;
  user: any;
  feedDetails =[];

  constructor(
    private serviceService: ServiceService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getFeedDetails();
  }


  form = new FormGroup({
    feed: new FormControl('', Validators.required),
    image: new FormControl(''),

  })



  toggleTag() {
    this.showMe = !this.showMe
  }

  // preview(files) {
  //   if (files.length === 0)
  //     return ;
  //     else


  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
  //     return;
  //   }
  //   var reader = new FileReader();
  //   this.imagePath = files;
  //   reader.readAsDataURL(files[0]); 
  //   reader.onload = (_event) => { 
  //     this.imgURL = reader.result; 
  //   }

  // }






  base64Output: string = 'null';

  onFileSelected(event) {
    if (event.length === 0) {
      return null
    } else {
      this.convertFile(event.target.files[0]).subscribe(base64 => {
        this.base64Output = base64;
      });
    }


  }

  convertFile(files: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(files);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  onPost() {

    if (this.form.valid) {


      let social = {

        user_name: this.user.name,
        feed: this.form.value.feed,
        image: this.base64Output,
        token: this.user.token,


      }
      console.log(social)
      this.serviceService.addPost(social).subscribe(res => {
 this.getFeedDetails();
        this.serviceService.filter('');
        this.form.reset();

        Swal.fire(
          'Post has added successfully!',
          '',
          'success'
        )
      })


    } else {

    }

  }


  getFeedDetails() {
    let createToken = {
      AuthToken: this.user.token,

    }
    this.serviceService.getFeedDetails(createToken).subscribe((res: any) => {
      this.feedDetails = res.data;

      
 console.log(this.feedDetails)
    }

    );
  }

  deletePost(id){
   
     
          this.serviceService.deleteSensor(id).subscribe((res: any) => {
            this.getFeedDetails();
          });
  
          Swal.fire(
            'Deleted!',
            'Post deleted.',
            'success'
          )
        }
      
    
  



  // onFileSelected(event) {
  //   this.convertFile(event.target.files[0]).subscribe(base64 => {
  //     this.base64Output = base64;
  //   });
  // }

  // convertFile(file : File) : Observable<string> {
  //   const result = new ReplaySubject<string>(1);
  //   const reader = new FileReader();
  //   reader.readAsBinaryString(file);
  //   reader.onload = (event) => result.next(btoa(event.target.result.toString()));
  //   return result;
  // }

}
