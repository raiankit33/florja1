import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user:any;


  httpRegisterOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
    })

}

  constructor(private http:HttpClient) { }

  handleError(error){
    return throwError(error.message || "server error...........!")
}


  
  registerUser(user){
        
    return this.http.post('https://pxwrniug13.execute-api.us-east-1.amazonaws.com/dev1',user).pipe(map(res => res))
    .pipe(catchError(this.handleError));;;
}





// Tenant service

registerTenant(tenant){
        
  return this.http.post('https://s61tckxsb4.execute-api.us-east-2.amazonaws.com/tenant12',tenant).pipe(map(res => res));
}

getTenantDetails(data){
        
  return this.http.get('https://6sotdjeseh.execute-api.us-east-2.amazonaws.com/tenantget'+data.T_ID,data).pipe(map(res => res));
}

}
