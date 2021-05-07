
import {Directive} from '@angular/core';
import {AsyncValidator,AbstractControl,ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceService } from '../service/service.service';


@Directive({
    selector :'[unquieEmail]',
    providers: [{provide:NG_ASYNC_VALIDATORS, useExisting : UniqueEmailValidatiorDirective, multi: true}]
})
export class UniqueEmailValidatiorDirective implements AsyncValidator {

    constructor(private service : ServiceService){

    }

    validate(c:AbstractControl): Promise<ValidationErrors| null > | Observable<ValidationErrors | null >{
        return this.service.isEmailRegisterd(c.value).pipe(
            map(users =>{
                return users ? {'uniqueEmail' : true }: null;
            })
        )
    } 
}