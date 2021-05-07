import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagingService } from '../../service/messaging.service';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

 

  p: number = 1;
  count=5;
   
  name:any;
    error: string;
    err: string;
    user: any;
    parent=false;
    editParent=false;
    open=false;
    message: string;
    mess=false;

  notificationDetails=[];
  
  

  userObj = {
     
    name :"",
    title : "",
    description :""
  };
  messag: any;
  messages: any;
  
    constructor(
      private serviceService : ServiceService,
      private messagingService: MessagingService,
      private router: Router
    ) { 
      this.serviceService.listen().subscribe((m:any)=>{
        console.log(m);
        this.getAcademiaDetails();
      })
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
     
      name: new FormControl('',Validators.required),
      title: new FormControl('',Validators.required),
     
      description: new FormControl('',Validators.required),
     
  
    })
  
  
    Search(){
      if(this.name == ""){
        this.getAcademiaDetails();
      }else{
        this.notificationDetails = this.notificationDetails.filter(res =>{
          return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        })
      }
    }
  
    validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {       
        this.validateAllFormFields(control);            
      }
    });
  }
  
  refresh(){
    this.form.reset();
  }
  
    onAddSubmit(){
      if(this.form.valid){
        
    
        let notification ={
          id: this.user.id,
          name: this.form.value.name,
          title: this.form.value.title,
          description: this.form.value.description,
         
        }
        this.messagingService.sendPushMessage(this.form.value.name, this.form.value.title, this.form.value.description);
       console.log(notification)
        this.serviceService.addNotification(notification).subscribe( (res:any)=> {
          if (res.statusCode== 200) {
        //     const userId = '2222';
        // this.messagingService.requestPermission(userId);
        // this.messagingService.receiveMessage();
        // this.messages = this.messagingService.currentMessage;
    
        // this.messagingService.sendPushMessage("Web push notification", "HI, Firebase test messsage");
          this.serviceService.filter('');
      this.form.reset();
      Swal.fire(
        'Notification has added Successfully!',
        '',
        'success'
      )

      

    
    }
        })
      }else{
        this.validateAllFormFields(this.form);
      }
  
    
        
    }
 
    PushNotification(){
      // const userId = '2222';
      // this.messagingService.requestPermission(userId);
      // this.messagingService.receiveMessage();
      // this.messages = this.messagingService.currentMessage;
      // this.messagingService.sendPushMessage("Web push notification", "HI, Firebase test messsage");
    }
  
  
    getAcademiaDetails(){
      let createToken= {
        AuthToken : this.user.token,
        id:this.user.id
      }
      this.serviceService.getNotification(createToken).subscribe((res:any)=>{
        this.notificationDetails = res.data;
       
      },(error)=> {
        this.error = 'Server Down Please try After Sometime ..! '
      }
      
      );
    } 
  
    editNotification(academia){
      this.userObj = academia;
    }
    
  
    update(){
     
      this.serviceService.updateNotification(this.userObj).subscribe(()=>{
  
        Swal.fire(
         'Success!',
         'Notification has Updated.',
         'success'
       )
         })
       
    }
  
    deleteAcademia(id){
     
  
  
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
          this.serviceService.deleteAcademia(id).subscribe( (res:any)=>{
            this.getAcademiaDetails();
            
          
          });
        
          Swal.fire(
            'Deleted!',
            'Notification has been deleted.',
            'success'
          )
        }
      })
    }
  }
  