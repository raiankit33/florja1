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
  tenant:any;
  academia:any;
  admin:any;
  httpRegisterOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          //  'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
  }
  adm: any;


  constructor(private http:HttpClient) {}

  handleError(error){
    return throwError(error.message || "server error...........!")
}


     authenticateTenant(tenant) {
      return this.http.post<any>('https://ttdlf73wib.execute-api.us-east-2.amazonaws.com/loginTenant/loginTenant', tenant)
      .pipe(catchError(this.handleError));;
    }

    authenticateUser(user) {
      return this.http.post<any>('https://ttdlf73wib.execute-api.us-east-2.amazonaws.com/loginUser/loginUser', user)
    }


    authenticateAcademia(academia) {
      return this.http.post<any>('https://ttdlf73wib.execute-api.us-east-2.amazonaws.com/loginAcademia/loginAcademia', academia)
    }
    

    
    authenticateAdmin(admin) {
      return this.http.post<any>('https://ttdlf73wib.execute-api.us-east-2.amazonaws.com/loginSuperAdmin/loginSuperAdmin', admin)
    }
 
      // getToken(){
      //   return localStorage.getItem('token');
      
      // }
     storeUserData(token,user){
          localStorage.setItem('token',token);
          localStorage.setItem('user', JSON.stringify(user));
         
          // localStorage.setItem('currentUser', JSON.stringify({ token: token, user: user }));
          // localStorage.setItem('user', JSON.stringify(tenant));
          // localStorage.setItem('academia', JSON.stringify(academia));
          // localStorage.setItem('admin', JSON.stringify(admin));
          this.authToken = token;
          this.user = user;
          
     }

//      storeAminData(token,adm){
//       localStorage.setItem('token',token);
      
//       localStorage.setItem('adm', JSON.stringify(adm));
     
//       this.authToken = token;
//       this.adm = adm;
      
//  }

//      storeTenantData(token,tenant){
//       localStorage.setItem('token',token);
//       localStorage.setItem('tenant', JSON.stringify(tenant));
    
//       this.authToken = token;
//       this.tenant = tenant;
//  }



       logout(){
        localStorage.removeItem('token');
           this.authToken =null;
           this.user =null;
           localStorage.clear();
       }
  
}
