import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { SharedService } from 'src/app/service/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-academia',
  templateUrl: './academia.component.html',
  styleUrls: ['./academia.component.css']
})
export class AcademiaComponent implements OnInit {


 

isEdit = false;
p: number = 1;
  userObj = {
    T_ID:"",
    Name :"",
    Email : "",
    Contact: "",
    Permission :""
  };
  academiaDetails=[];
name:any;
  constructor(
    private serviceService : ServiceService,
    private sharedData : SharedService,
    private router: Router
  ) { 
    this.serviceService.listen().subscribe((m:any)=>{
      console.log(m);
      this.getAcademiaDetails();
    })
  }

  ngOnInit(): void {
    this.getAcademiaDetails();
  }

  form = new FormGroup({
    T_ID: new FormControl(''),
    Name: new FormControl('',Validators.required),
    Email: new FormControl('',[Validators.required, Validators.email]),
    Contact: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    Permission: new FormControl('All Access',Validators.required),
   

  })


  Search(){
    if(this.name == ""){
      this.getAcademiaDetails();
    }else{
      this.academiaDetails = this.academiaDetails.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  onAddSubmit(){

  
    if(this.form.valid){
     
      this.serviceService.registerAcademia(this.form.value).subscribe( res=> {
        console.log(res);
        this.serviceService.filter('added click');
    this.form.reset();
    Swal.fire(
      'Academia has added Successfully!',
      '',
      'success'
    )

      })
    }

  
      
  }


  getAcademiaDetails(){
    this.serviceService.getAcademiaDetails().subscribe((res:any)=>{
      this.academiaDetails = res.data;
     
    }
    
    );
  } 

  editAcademia(academia){
    this.userObj = academia;
    this.isEdit =true;
 
  }
  

  updateAcademia(){
   
    this.serviceService.updateAcademia(this.userObj).subscribe(()=>{

      Swal.fire(
       'Success!',
       'Academia has Updated.',
       'success'
     )
       })
     
  }

  deleteAcademia(A_ID){
   


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceService.deleteAcademia(A_ID).subscribe( (res:any)=>{
          this.getAcademiaDetails();
          
        
        });
      
        Swal.fire(
          'Deleted!',
          'Academia has been deleted.',
          'success'
        )
      }
    })
  }
}
