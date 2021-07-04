import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagingService } from 'src/app/service/messaging.service';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.component.html',
  styleUrls: ['./admin-notification.component.css']
})
export class AdminNotificationComponent implements OnInit {


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
  tenantDetails: any;
  
    constructor(
      private serviceService : ServiceService,
      private messagingService: MessagingService,
      private router: Router
    ) { 
  
    }
  
    ngOnInit(): void {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.getNotificationDetails();
      this.getTenantDetails();
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
      t_id: new FormControl('',Validators.required),
  
    })
  
  
    Search(){
      if(this.name == ""){
        this.getNotificationDetails();
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
          t_id: this.form.value.t_id,
         
        }
      
        if (this.form.value.t_id == '') {
          this.messagingService.sendPushMessage(this.form.value.name, this.form.value.title, this.form.value.description);
        } else {
          this.messagingService.sendPushMessageWithTopic(this.form.value.name,this.form.value.title, this.form.value.description,this.form.value.t_id)
        }
        
        console.log(notification)
     
        this.serviceService.addNotification(notification).subscribe( (res:any)=> {
          if (res.statusCode== 200) {
        //     const userId = '2222';
        // this.messagingService.requestPermission(userId);
        // this.messagingService.receiveMessage();
        // this.messages = this.messagingService.currentMessage;
    
        // this.messagingService.sendPushMessage("Web push notification", "HI, Firebase test messsage");
        this.getNotificationDetails
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
  
  
    getNotificationDetails(){
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
        this.messagingService.sendPushMessage(this.userObj.name,this.userObj.title,this.userObj.description);
        console.log(this.userObj)
        Swal.fire(
         'Success!',
         'Notification has Updated.',
         'success'
       )
         })
       
    }
  
    deleteNotification(id){
     
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
          this.serviceService.deleteNotification(id).subscribe( (res:any)=>{
            this.getNotificationDetails();
            
          
          });
        
          Swal.fire(
            'Deleted!',
            'Notification has been deleted.',
            'success'
          )
        }
      })
    }


    getTenantDetails(){
      let createToken ={
        AuthToken:this.user.token,
  
      }
      this.serviceService.getTenantDetails(createToken).subscribe((res:any)=>{
        this.tenantDetails = res.data;
       
      },(error)=> {
        this.error = 'Server Down Please try After Sometime ..! '
      }
      );
    } 
  }
  