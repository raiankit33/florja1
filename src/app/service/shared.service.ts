import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private sharedData = new BehaviorSubject({});
  currentSharedData =this.sharedData.asObservable(); 
    constructor(){}



    updateSharedData(data){
        this.sharedData.next(data);
    }

}