import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, ReplaySubject } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  showMe: boolean = false;
  public imagePath;
  imgHide: boolean = true;
  imgURL : any;
  public message: string;
  user: any;
  feedDetails = [];

  constructor(
    private userService : UserService,
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
        AuthToken: this.user.token,
      }
   
  
      console.log(social)
      this.userService.addPost(social).subscribe(res => {
        this.getFeedDetails();
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
    this.userService.getFeedDetails(createToken).subscribe((res: any) => {
      this.feedDetails = res.data;
   
    }

    );
  }

  deletePost(id) {

    this.userService.deletePost(id).subscribe((res: any) => {
      this.getFeedDetails();
      Swal.fire(
        'Deleted!',
        'Post deleted.',
        'success'
      )
    });


  }


}
