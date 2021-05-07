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

apiKey ={
  "id" : '0b23256409ed40358fbb302fb35f83ed'
};

registerPlant(plant){
      
  return this.http.post('https://jd3bl8nyyf.execute-api.us-east-2.amazonaws.com/insertPlant/insertPlant',plant).pipe(map(res => res));
}

getPlantDetails(createToken){
      
return this.http.post('https://jd3bl8nyyf.execute-api.us-east-2.amazonaws.com/getPlant/getPlant',createToken).pipe(map(res => res));

}

updatePlant(plant){
  return this.http.put('https://jd3bl8nyyf.execute-api.us-east-2.amazonaws.com/updatePlant/updatePlant?id='+plant.id,plant).pipe(map(res =>
  res));
}

deletePlant(id){
        
  return this.http.post('https://jd3bl8nyyf.execute-api.us-east-2.amazonaws.com/deletePlant/deletePlant/',{'id':id}).pipe(map(res => res));

}


// Irriagtion api

registerIrrigation(irrigation){
        
  return this.http.post('https://7cebxqik7b.execute-api.us-east-2.amazonaws.com/insertIrrigation/insertIrrigation',irrigation).pipe(map(res => res));
}

getIrrigationDetails(){
      
  return this.http.get('https://7cebxqik7b.execute-api.us-east-2.amazonaws.com/getIrrigation/getIrrigation').pipe(map(res => res));
  
  }

  deleteIrrigation(id){
        
    return this.http.post('https://7cebxqik7b.execute-api.us-east-2.amazonaws.com/deleteIrrigation/deleteIrrigation/',{'id':id}).pipe(map(res => res));
  
  }
  

  updateIrrigation(sensor){
    return this.http.put('https://7cebxqik7b.execute-api.us-east-2.amazonaws.com/updateIrrigation/updateIrrigation?id='+sensor.id,sensor).pipe(map(res =>
    res));
  }

  


}


