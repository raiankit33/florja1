import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:any;

  httpRegisterOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
    })

}


  constructor(private http:HttpClient) { }




  registerUser(user){
        
    return this.http.post('https://pxwrniug13.execute-api.us-east-1.amazonaws.com/dev1',user).pipe(map(res => res));
}

registerTenant(tenant){
        
  return this.http.post('https://pxwrniug13.execute-api.us-east-1.amazonaws.com/dev1',tenant).pipe(map(res => res));
}



}
