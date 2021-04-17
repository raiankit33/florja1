import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { map } from "rxjs/operators";
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
     let  payload =({"id":'31d322eca5cd404ab437c39451df5c1e',
     'user':user});
    
    return this.http.post('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/insertUser/insertUser',payload).pipe(map(res => res));
}

getUserDetails(){
        
  return this.http.get('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/getUser/getUser').pipe(map(res => res));

}

deleteUser(id){
        
  return this.http.post('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/deleteUser/deleteUser/',{'id':id}).pipe(map(res => res));

}



UpdateUser(user){
        
  return this.http.put('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/updateUser/updateUser?id='+user.id,user).pipe(map(res => res));

}

}