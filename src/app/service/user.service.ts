import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  plant:any;

  httpRegisterOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
    })

}

  constructor(private http:HttpClient) { }


 //for page refresh on plant page 
  private _listners = new Subject<any>();
listen(): Observable<any>{
   return this._listners.asObservable();
}
 filter(filterBy: string){
   this._listners.next(filterBy);
 }

//plant api 

registerPlant(plant){
        
  return this.http.post('https://jd3bl8nyyf.execute-api.us-east-2.amazonaws.com/insertPlant/insertPlant',plant).pipe(map(res => res));
}

getPlantDetails(){
      
return this.http.get('https://jd3bl8nyyf.execute-api.us-east-2.amazonaws.com/getPlant/getPlant').pipe(map(res => res));

}

deletePlant(P_ID){
        
  return this.http.post('https://k0qxazb5u2.execute-api.us-east-2.amazonaws.com/Delete_Plant/',{'P_ID':P_ID}).pipe(map(res => res));

}


// Irriagtion api

registerIrrigation(irrigation){
        
  return this.http.post('https://0yyca22qmk.execute-api.us-east-2.amazonaws.com/add_Irrigation',irrigation).pipe(map(res => res));
}

getIrrigationDetails(){
      
  return this.http.get('https://0yyca22qmk.execute-api.us-east-2.amazonaws.com/get_Irrigation_data').pipe(map(res => res));
  
  }

  deleteIrrigation(IR_ID){
        
    return this.http.post('https://fzbd618al4.execute-api.us-east-2.amazonaws.com/Delete_Irriegation/',{'IR_ID':IR_ID}).pipe(map(res => res));
  
  }


}


