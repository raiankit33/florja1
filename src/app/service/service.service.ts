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
        
  return this.http.post('https://615daw6n88.execute-api.us-east-2.amazonaws.com/insertAcademia/insertAcademia',academia).pipe(map(res => res))
  .pipe(catchError(this.handleError));
 }

 getAcademiaDetails(){
        
  return this.http.get('https://615daw6n88.execute-api.us-east-2.amazonaws.com/getAcademia/getAcademia').pipe(map(res => res));

}


deleteAcademia(id){
        
  return this.http.post('https://615daw6n88.execute-api.us-east-2.amazonaws.com/deleteAcademia/deleteAcademia/',{'id':id}).pipe(map(res =>
   res));
}

updateAcademia(academia){
  return this.http.put('https://615daw6n88.execute-api.us-east-2.amazonaws.com/updateAcademia/updateAcademia?id='+academia.id,academia).pipe(map(res =>
  res));
}

}
