import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 
  tenant:any;
  academia:any;

  httpRegisterOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
    })

}

  constructor(private http:HttpClient) { }

  handleError(error){
    return throwError(error.message || "server error...........!")
}

// for page refresh 
private _listners = new Subject<any>();
listen(): Observable<any>{
   return this._listners.asObservable();
}
 filter(filterBy: string){
   this._listners.next(filterBy);
 }


  
 

// Tenant service

registerTenant(tenant){
        
  return this.http.post('https://9368fefpvb.execute-api.us-east-2.amazonaws.com/insertTenant/insertTenant',tenant).pipe(map(res => res))
  .pipe(catchError(this.handleError)); }

getTenantDetails(){
        
  return this.http.get('https://9368fefpvb.execute-api.us-east-2.amazonaws.com/getTenant/getTenant').pipe(map(res => res));


}


 deleteTenant(id){
        
  return this.http.post('https://9368fefpvb.execute-api.us-east-2.amazonaws.com/deleteTenant/deleteTenant/',{'id':id}).pipe(map(res =>
   res));
}

updateTenant(tenant){
  return this.http.put('https://9368fefpvb.execute-api.us-east-2.amazonaws.com/updateTenant/updateTenant?id='+tenant.id,tenant).pipe(map(res =>
  res));
}


// Academia Api 


registerAcademia(academia){
        
  return this.http.post('https://vil368z1j3.execute-api.us-east-2.amazonaws.com/put_v1',academia).pipe(map(res => res))
  .pipe(catchError(this.handleError));
 }

 getAcademiaDetails(){
        
  return this.http.get('https://vil368z1j3.execute-api.us-east-2.amazonaws.com/get_v1').pipe(map(res => res));

}


deleteAcademia(A_ID){
        
  return this.http.post('https://x7o6jyoax2.execute-api.us-east-2.amazonaws.com/Delete_Academia_Web/',{'A_ID':A_ID}).pipe(map(res =>
   res));
}

updateAcademia(academia){
  return this.http.put('https://f5j9wcu4r8.execute-api.us-east-2.amazonaws.com/academia_update_web?A_ID='+academia.A_ID,academia).pipe(map(res =>
  res));
}

}
