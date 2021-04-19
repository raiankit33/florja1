import { Injectable } from "@angular/core";


import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //  users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
token:any;
  authToken: any;
  user: any;
  httpRegisterOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
  }


  constructor(private http:HttpClient) {}

  handleError(error){
    return throwError(error.message || "server error...........!")
}

    //  authenticateUser(user){
    //   //  let headers = new Headers();
    //   //  headers.append('Content-Type','application/json');
     
    //    return this.http.post('https://ttdlf73wib.execute-api.us-east-2.amazonaws.com/loginTenant/loginTenant',user,this.httpRegisterOptions).pipe(map(res => res));
       
    //  }

     authenticateTenant(tenant) {
      return this.http.post<any>('https://ttdlf73wib.execute-api.us-east-2.amazonaws.com/loginTenant/loginTenant', tenant)
      .pipe(catchError(this.handleError));;
    }

    authenticateUser(user) {
      return this.http.post<any>('https://ttdlf73wib.execute-api.us-east-2.amazonaws.com/loginUser/loginUser', user,this.httpRegisterOptions)
    }
 
      getToken(){
        return localStorage.getItem('token');
      
      }
     storeUserData(token,user){
          localStorage.setItem('token',token);
          localStorage.setItem('user', JSON.stringify(user));
          this.authToken = token;
          this.user = user;
     }


       logout(){
        localStorage.removeItem('token');
           this.authToken =null;
           this.user =null;
           localStorage.clear();
       }
  
}
