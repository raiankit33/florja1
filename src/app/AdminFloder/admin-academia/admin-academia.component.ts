import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { SharedService } from 'src/app/service/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-academia',
  templateUrl: './admin-academia.component.html',
  styleUrls: ['./admin-academia.component.css']
})
export class AdminAcademiaComponent implements OnInit {

 

 


  p: number = 1;
  count =5;
    academiaDetails=[];
  name:any;
    error: string;
    err: string;
    user: any;
    parent=false;
    editParent=false;
    open=false;
    message: string;
    mess=false;
    active: Boolean = true;
  Inactive: boolean = false;
  allMember : boolean =false;
  
    userObj = {
     
      name :"",
      email : "",
      phone: "",
      permission :""
    };
  activeDetails: any[];
  InactiveDetail: any[];
  
  
  
    constructor(
      private serviceService : ServiceService,
      private sharedData : SharedService,
      private router: Router
    ) { 
   
    }
  
    ngOnInit(): void {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.getAcademiaDetails();
      if(this.user.permission=='all' && this.user.parent_id=="owner"){
        this.parent = true;
          }else{
           if (this.user.permission=='VIEW') {
             this.parent = false
           } else if (this.user.permission=='EDIT') {
            
             this.editParent =true;
           }
          }
    }
  
    form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      permission: new FormControl('',Validators.required),
     
  
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

    AllData(){
      this.allMember = true;
      this.active =false;
      this.Inactive =false;
       }
     
       ActiveTab(){
     this.active =true;
     this.Inactive =false;
     this.allMember =false;
       }
     
       InActiveTab(){
       this.Inactive =true;
       this.active =false;
       this.allMember =false;
       }
  
    validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }
  
  refresh(){
    this.form.reset();
  }
  
    onAddSubmit(){
  
    
      if(this.form.valid){
        let a ={
          name: this.form.value.name,
          email: this.form.value.email,
          phone: this.form.value.phone,
          permission: this.form.value.permission,
          AuthToken :this.user.token,
          // id:this.user.id
        }
       
        this.serviceService.registerAcademia(a).subscribe( (res:any)=> {
          if (res.statusCode== 200) {
         this.getAcademiaDetails();
      this.form.reset();
      Swal.fire(
        'Academia added Successfully!',
        '',
        'success'
      )
    } else if (res.statusCode == 403) {
      this.err = "This email is already registered. ",
        this.open = true;
      setTimeout(() => {
        this.open = false
      }, 3000);
    } else {
      this.message = "This Phone no is already registered.",
        this.mess = true;
      setTimeout(() => {
        this.mess = false
      }, 3000);
    }
        })
      }else{
        this.validateAllFormFields(this.form);
      }
  
    
        
    }
  
  
    getAcademiaDetails(){
      let token ={
        AuthToken :this.user.token
      }
      this.serviceService.getAcademiaDetails(token).subscribe((res:any)=>{
        this.academiaDetails = res.data;

        this.activeDetails = this.academiaDetails.filter(data => data.status == 'Active');

        this.InactiveDetail = this.academiaDetails.filter(data => data.status == 'Inactive' );
       console.log(this.academiaDetails)
      },(error)=> {
        this.error = 'Server Down Please try After Sometime ..! ';
        Swal.fire({
          icon: 'error',
          title: 'Token mismatch',
          text: 'Please try again!',
          
        })
      }
      
      );
    } 
  
    editAcademia(academia){
      this.userObj = academia;
   
   
    }
    
  
    updateAcademia(){
      let update ={
        data : this.userObj,
        AuthToken : this.user.token
      }
     
      this.serviceService.updateAcademia(update).subscribe((res:any)=>{
  if(res.statusCode == 200){
    Swal.fire(
      'Success!',
      'Academia  Updated.',
      'success'
    )
  }else{
    Swal.fire({
      icon: 'error',
     
      text: 'Please try again!',
      
    })
  }
     
         },(error)=> {
          this.error = 'Server Down Please try After Sometime ..! ';
       
        })
       
    }
  
    deleteAcademia(academia){
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
          let d ={
            id : academia.id,
            AuthToken : this.user.token,
            status :"Inactive"
          }
          this.serviceService.deleteAcademia(d).subscribe( (res:any)=>{
            if(res.statusCode == 200){
              this.getAcademiaDetails();
              Swal.fire(
                'Deleted!',
                'Academia Deleted.',
                'success'
              )
            }else if(res.statusCode == 405){
              Swal.fire({
                icon: 'error',
                title: 'Token mismatch',
                text: 'Please try again!',
                
              })
            }else{
              Swal.fire({
                icon: 'error',
              
                text: 'Please try  again!',
                
              })
            }
        
          
          });
        
         
        }
      },(error)=> {
        this.error = 'Server Down Please try After Sometime ..! ';
     
      })
    }

    activateAcademia(academia){
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to Activate this User!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Activate!'
      }).then((result) => {
        if (result.isConfirmed) {
          let d ={
            id : academia.id,
            AuthToken : this.user.token,
            status :"Active"
          }
          this.serviceService.deleteAcademia(d).subscribe( (res:any)=>{
            if(res.statusCode == 200){
              this.getAcademiaDetails();
            
              Swal.fire(
                'Success!',
                'Academia Active.',
                'success'
              )
            }
            else{
              Swal.fire({
                icon: 'error',
                title: 'Token mismatch',
                text: 'Please try again!',
                
              })
            }
           
          });
        
        }
      },(error)=> {
        this.error = 'Server Down Please try After Sometime ..! ';
      
      })
    }
  }