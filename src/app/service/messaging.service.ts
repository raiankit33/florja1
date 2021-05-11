import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(
    private httpClient: HttpClient,
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {

    this.angularFireMessaging.messages.subscribe(
      (_messaging:AngularFireMessaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  /**
   * update token in firebase database
   * 
   * @param userId userId as a key 
   * @param token token as a value
   */
  // updateToken(userId, token) {
  //   // we can change this function to request our backend service
  //   this.angularFireAuth.authState.pipe(take(1)).subscribe(
  //     () => {
  //       const data = {};
  //       data[userId] = token
  //       this.angularFireDB.object('fcmTokens/').update(data)
  //     })
  // }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */
  // requestPermission(userId) {
  //   this.angularFireMessaging.requestToken.subscribe(
  //     (token) => {
  //       console.log(token);
  //       this.updateToken(userId, token);
  //     },
     
  //   );
  // }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
  // Sending the payload with fcm url
  // this requires server token
  sendPushMessage(name,title, message){
    let data = {
        "notification": {
            "name":name,
            "title": title,
            "body": message,
            "click_action": "http://localhost:4200/",
            "icon": "http://url-to-an-icon/icon.png",
            "sound" : "default"
        },
        "to": "fWNp8P5-q0gEjRHyaeNdY_:APA91bG7uvaEHyltZpOUdwFYhXCuDXalK24jrgi5R6P2UExTOCeXOZZ3ds5tJqmFqT4Kc-4WZk66mGlNcTeb3zurEDHcyMQXYIKd0k1nwYeTENBxjusqPLkHWQXG8Ferr8l9eNK4a1M4"
    }

    let postData = JSON.stringify(data);    
    let url ="https://fcm.googleapis.com/fcm/send" ;
    this.httpClient.post(url,  postData, {
      headers: new HttpHeaders()
      // put the server key here
          .set('Authorization', 'key=AAAAH9oWOgI:APA91bH-R094W8XEvOwI7qOvFHlmjLjSXnVFsyhGiWIM-haK7rwzkfLerMn69ifTLGmaD5AJByW4p0B8l1ybS0sXWSsXpxed0fmNOzoE0-pYRMDpN859ZxNAcjpFlG4VcOyBWRgl1CkX')
          .set('Content-Type', 'application/json'),
     })
     .subscribe((response: Response) => {
        console.log(response)
      },
      (error: Response) => {
        console.log(error);
        console.log("error" + error);
      });
  }


  sendPushMessageWithTopic(name,title, message,topic){
    let data = {
        "notification": {
            "name":name,
            "title": title,
            "body": message,
            "click_action": "http://localhost:4200/",
            "icon": "http://url-to-an-icon/icon.png",
            "sound" : "default"
        },
        "to": "/topics/tenant"
    }

    let postData = JSON.stringify(data);    
    let url ="https://fcm.googleapis.com/fcm/send" ;
    this.httpClient.post(url,  postData, {
      headers: new HttpHeaders()
      // put the server key here
          .set('Authorization', 'key=AAAAH9oWOgI:APA91bH-R094W8XEvOwI7qOvFHlmjLjSXnVFsyhGiWIM-haK7rwzkfLerMn69ifTLGmaD5AJByW4p0B8l1ybS0sXWSsXpxed0fmNOzoE0-pYRMDpN859ZxNAcjpFlG4VcOyBWRgl1CkX')
          .set('Content-Type', 'application/json'),
     })
     .subscribe((response: Response) => {
        console.log(response)
      },
      (error: Response) => {
        console.log(error);
        console.log("error" + error);
      });
  }


  sendPushToPlant(name){
    let data = {
        "notification": {
            
            "title": name,
            "body": name +' is is under Surveillance ',
            "click_action": "http://localhost:4200/",
            "icon": "http://url-to-an-icon/icon.png",
            "sound" : "default"
        },
        "to": "fWNp8P5-q0gEjRHyaeNdY_:APA91bG7uvaEHyltZpOUdwFYhXCuDXalK24jrgi5R6P2UExTOCeXOZZ3ds5tJqmFqT4Kc-4WZk66mGlNcTeb3zurEDHcyMQXYIKd0k1nwYeTENBxjusqPLkHWQXG8Ferr8l9eNK4a1M4"
    }

    let postData = JSON.stringify(data);    
    let url ="https://fcm.googleapis.com/fcm/send" ;
    this.httpClient.post(url,  postData, {
      headers: new HttpHeaders()
      // put the server key here
          .set('Authorization', 'key=AAAAH9oWOgI:APA91bH-R094W8XEvOwI7qOvFHlmjLjSXnVFsyhGiWIM-haK7rwzkfLerMn69ifTLGmaD5AJByW4p0B8l1ybS0sXWSsXpxed0fmNOzoE0-pYRMDpN859ZxNAcjpFlG4VcOyBWRgl1CkX')
          .set('Content-Type', 'application/json'),
     })
     .subscribe((response: Response) => {
        console.log(response)
      },
      (error: Response) => {
        console.log(error);
        console.log("error" + error);
      });
  }


  sendPushToIrrigation(name){
    let data = {
        "notification": {
            
            "title": name,
            "body": name + ' is in  under Surveillance ',
            "click_action": "http://localhost:4200/",
            "icon": "http://url-to-an-icon/icon.png",
            "sound" : "default"
        },
        "to": "fWNp8P5-q0gEjRHyaeNdY_:APA91bG7uvaEHyltZpOUdwFYhXCuDXalK24jrgi5R6P2UExTOCeXOZZ3ds5tJqmFqT4Kc-4WZk66mGlNcTeb3zurEDHcyMQXYIKd0k1nwYeTENBxjusqPLkHWQXG8Ferr8l9eNK4a1M4"
    }

    let postData = JSON.stringify(data);    
    let url ="https://fcm.googleapis.com/fcm/send" ;
    this.httpClient.post(url,  postData, {
      headers: new HttpHeaders()
      // put the server key here
          .set('Authorization', 'key=AAAAH9oWOgI:APA91bH-R094W8XEvOwI7qOvFHlmjLjSXnVFsyhGiWIM-haK7rwzkfLerMn69ifTLGmaD5AJByW4p0B8l1ybS0sXWSsXpxed0fmNOzoE0-pYRMDpN859ZxNAcjpFlG4VcOyBWRgl1CkX')
          .set('Content-Type', 'application/json'),
     })
     .subscribe((response: Response) => {
        console.log(response)
      },
      (error: Response) => {
        console.log(error);
        console.log("error" + error);
      });
  }


  sendPushToSensor(name){
    let data = {
        "notification": {
            
            "title": name,
            "body": ' Sensor is in  under Surveillance ',
            "click_action": "http://localhost:4200/",
            "icon": "http://url-to-an-icon/icon.png",
            "sound" : "default"
        },
        "to": "fWNp8P5-q0gEjRHyaeNdY_:APA91bG7uvaEHyltZpOUdwFYhXCuDXalK24jrgi5R6P2UExTOCeXOZZ3ds5tJqmFqT4Kc-4WZk66mGlNcTeb3zurEDHcyMQXYIKd0k1nwYeTENBxjusqPLkHWQXG8Ferr8l9eNK4a1M4"
    }

    let postData = JSON.stringify(data);    
    let url ="https://fcm.googleapis.com/fcm/send" ;
    this.httpClient.post(url,  postData, {
      headers: new HttpHeaders()
      // put the server key here
          .set('Authorization', 'key=AAAAH9oWOgI:APA91bH-R094W8XEvOwI7qOvFHlmjLjSXnVFsyhGiWIM-haK7rwzkfLerMn69ifTLGmaD5AJByW4p0B8l1ybS0sXWSsXpxed0fmNOzoE0-pYRMDpN859ZxNAcjpFlG4VcOyBWRgl1CkX')
          .set('Content-Type', 'application/json'),
     })
     .subscribe((response: Response) => {
        console.log(response)
      },
      (error: Response) => {
        console.log(error);
        console.log("error" + error);
      });
  }




}




