import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { map } from "rxjs/operators";
import { AuthService} from '../service/auth.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubadminService {

  user:any;

  httpRegisterOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
    })

}


  constructor(private http:HttpClient) { }

  //for page refresh on user page 
  private _listners = new Subject<any>();
  listen(): Observable<any>{
     return this._listners.asObservable();
  }
   filter(filterBy: string){
     this._listners.next(filterBy);
   }
 

  registerUser(user){
   
    
    return this.http.post('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/insertUser/insertUser',user).pipe(map(res => res));
}

getUserDetails(){
  // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/getUser/getUser',).pipe(map(res => res));

}

deleteUser(id){
        
  return this.http.post('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/deleteUser/deleteUser/',{'id':id}).pipe(map(res => res));

}



UpdateUser(user){
        
  return this.http.put('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/updateUser/updateUser?id='+user.id,user).pipe(map(res => res));

}

}