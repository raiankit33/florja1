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
    return throwError(error.message || "server Error...........!")
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
        
  return this.http.post('https://9368fefpvb.execute-api.us-east-2.amazonaws.com/insertTenant/insertTenant',tenant)
  .pipe(catchError(this.handleError)); }

getTenantDetails(createToken){
        
  return this.http.post('https://9368fefpvb.execute-api.us-east-2.amazonaws.com/getTenant/getTenant',createToken)
  .pipe(catchError(this.handleError));


}


 deleteTenant(token){
        
  return this.http.post('https://9368fefpvb.execute-api.us-east-2.amazonaws.com/deleteTenant/deleteTenant/',token)
  .pipe(catchError(this.handleError));
}

updateTenant(tenant){
  return this.http.put('https://9368fefpvb.execute-api.us-east-2.amazonaws.com/updateTenant/updateTenant?id='+tenant.id,tenant)
}

// add user



registerUser(user){
   
    
  return this.http.post('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/insertUser/insertUser',user)
  .pipe(catchError(this.handleError));
}

getUserDetails(createToken){

   
return this.http.post('https://tquaq9cwkj.execute-api.us-east-2.amazonaws.com/getSuperAdmin/getSuperAdmin',createToken).pipe(catchError(this.handleError)); 

}

deleteUser(id){
      
return this.http.post('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/deleteUser/deleteUser/',{'id':id})

}



UpdateUser(user){
      
return this.http.put('https://7lp2aoag6f.execute-api.us-east-2.amazonaws.com/updateUser/updateUser?id='+user.id,user)

}

//

// admin user


adminUser(admin){
   
  return this.http.post('https://tquaq9cwkj.execute-api.us-east-2.amazonaws.com/AdminUser/AdminUser ',admin)
  .pipe(catchError(this.handleError));
}

getAdminDetails(createToken){

   
return this.http.post('https://tquaq9cwkj.execute-api.us-east-2.amazonaws.com/getAdminUser/getAdminUser',createToken).pipe(catchError(this.handleError)); 

}

deleteAdminUser(id){
      
return this.http.post('https://tquaq9cwkj.execute-api.us-east-2.amazonaws.com/deleteSuperAdmin/deleteSuperAdmin/',{'id':id})

}



UpdateAdminUser(user){
      
return this.http.put('https://tquaq9cwkj.execute-api.us-east-2.amazonaws.com/updateSuperAdmin/updateSuperAdmin?id='+user.id,user)

}


// Academia Api 


registerAcademia(academia){
        
  return this.http.post('https://615daw6n88.execute-api.us-east-2.amazonaws.com/insertAcademia/insertAcademia',academia)
  .pipe(catchError(this.handleError));
 }

 getAcademiaDetails(){
        
  return this.http.get('https://615daw6n88.execute-api.us-east-2.amazonaws.com/getAcademia/getAcademia').pipe(catchError(this.handleError));

}


deleteAcademia(id){
        
  return this.http.post('https://615daw6n88.execute-api.us-east-2.amazonaws.com/deleteAcademia/deleteAcademia/',{'id':id}).pipe(map(res =>
   res));
}

updateAcademia(academia){
  return this.http.put('https://615daw6n88.execute-api.us-east-2.amazonaws.com/updateAcademia/updateAcademia?id='+academia.id,academia).pipe(map(res =>
  res));
}


// sensor type

addSensor(sensor){
        
  return this.http.post('https://h074tqxcm0.execute-api.us-east-2.amazonaws.com/insertSensorType/insertSensorType',sensor).pipe(map(res => res))
  .pipe(catchError(this.handleError));
 }

 
 getSensorDetails(createToken){
        
  return this.http.post('https://h074tqxcm0.execute-api.us-east-2.amazonaws.com/getSensorType/getSensorType',createToken).pipe(catchError(this.handleError));

}

deleteSensorType(id){
        
  return this.http.post('https://h074tqxcm0.execute-api.us-east-2.amazonaws.com/deleteSensorType/deleteSensorType/',{'id':id}).pipe(map(res =>
   res));
}

updateSensorType(sensor){
  return this.http.put('https://h074tqxcm0.execute-api.us-east-2.amazonaws.com/updateSensorType/updateSensorType?id='+sensor.id,sensor).pipe(map(res =>
  res));
}


// plant api 


registerPlant(plant){
      
  return this.http.post('https://jd3bl8nyyf.execute-api.us-east-2.amazonaws.com/insertPlant/insertPlant',plant).pipe(map(res => res));
}

getPlantDetails(createToken){
      
return this.http.post('https://tquaq9cwkj.execute-api.us-east-2.amazonaws.com/getSuperAdminPlant/getSuperAdminPlant',createToken).pipe(map(res => res));

}

updatePlant(plant){
  return this.http.put('https://jd3bl8nyyf.execute-api.us-east-2.amazonaws.com/updatePlant/updatePlant?id='+plant.id,plant).pipe(map(res =>
  res));
}

deletePlant(id){
        
  return this.http.post('https://jd3bl8nyyf.execute-api.us-east-2.amazonaws.com/deletePlant/deletePlant/',{'id':id}).pipe(map(res => res));

}



getTenant(id){
  return this.http.post('https://tquaq9cwkj.execute-api.us-east-2.amazonaws.com/coneection/coneection ',id).pipe(map(res => res));
}



// sensors 

registerSensor(sens){
        
  return this.http.post('https://7eb1a6tus5.execute-api.us-east-2.amazonaws.com/insertSensor/insertSensor',sens).pipe(map(res => res))
  .pipe(catchError(this.handleError));
 }

 
 getSensors(createToken){
        
  return this.http.post('https://7eb1a6tus5.execute-api.us-east-2.amazonaws.com/getSensor/getSensor',createToken).pipe(catchError(this.handleError));

}

deleteSensor(id){
        
  return this.http.post('https://7eb1a6tus5.execute-api.us-east-2.amazonaws.com/deleteSensor/deleteSensor/',{'id':id}).pipe(map(res =>
   res));
}

updateSensor(sens){
  return this.http.put('https://7eb1a6tus5.execute-api.us-east-2.amazonaws.com/updateSensor/updateSensor?id='+sens.id,sens).pipe(map(res =>
  res));
}



getUser(id){

   
  return this.http.post('https://tquaq9cwkj.execute-api.us-east-2.amazonaws.com/connectTenantwithUser/connectTenantwithUser',id) .pipe(catchError(this.handleError)); 
  
  }


   
  isEmailRegisterd(email) {
  
    return this.http.get('https://9368fefpvb.execute-api.us-east-2.amazonaws.com/getTenant/getTenant/',email)
        
      
}


//irrigation 

addIrrigation(irrigation,token){
        
  return this.http.post('https://7cebxqik7b.execute-api.us-east-2.amazonaws.com/insertIrrigation/insertIrrigation',irrigation,token).pipe(map(res => res));
}

getIrrigation(createToken){
      
  return this.http.post('https://tquaq9cwkj.execute-api.us-east-2.amazonaws.com/getSuperAdminIrrigation/getSuperAdminIrrigation',createToken).pipe(map(res => res));
  
  }

  deleteIrrigation(id){
        
    return this.http.post('https://7cebxqik7b.execute-api.us-east-2.amazonaws.com/deleteIrrigation/deleteIrrigation/',{'id':id})
  
  }

  updateIrrigation(irrigation){
    return this.http.put('https://7cebxqik7b.execute-api.us-east-2.amazonaws.com/updateIrrigation/updateIrrigation?id='+irrigation.id,irrigation)
  }


  // notification api


  addNotification(notification){
        
    return this.http.post('https://x6szas6o91.execute-api.us-east-2.amazonaws.com/insertNotification/insertNotification',notification)
  }
  
  getNotification(createToken){
        
    return this.http.post('https://x6szas6o91.execute-api.us-east-2.amazonaws.com/getNotification/getNotification',createToken)
    
    }
  
    deleteNotification(id){
          
      return this.http.post('https://x6szas6o91.execute-api.us-east-2.amazonaws.com/deleteNotification/deleteNotification/',{'id':id})
    
    }
  
    updateNotification(notification){
      return this.http.put('https://7cebxqik7b.execute-api.us-east-2.amazonaws.com/updateIrrigation/updateIrrigation?id='+notification.id,notification)
    }



    // social page api

addPost(social){
        
  return this.http.post('https://z4ln9rgil4.execute-api.us-east-2.amazonaws.com/insertFeed/insertFeed',social).pipe(map(res => res))
  .pipe(catchError(this.handleError));
 }

 getFeedDetails(createToken){
        
  return this.http.post('https://z4ln9rgil4.execute-api.us-east-2.amazonaws.com/getFeed/getFeed',createToken)
  
  }


  deletePost(id){
          
    return this.http.post('https://x6szas6o91.execute-api.us-east-2.amazonaws.com/deleteNotification/deleteNotification/',{'id':id})
  
  }



}
