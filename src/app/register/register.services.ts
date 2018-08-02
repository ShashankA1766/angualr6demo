import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable()
export class RegisterService {
    serviceUrl: string = environment.url;
    authurl: string = this.serviceUrl + "user";
    constructor(private http: HttpClient) { }

    
    
    register(username: string, id:0,email: string,password: string,confirmpassword:String,name: string,organizationId:0,roleId:0) {
        
        return this.http.post<any>(this.authurl, { username: username, id:id,email:email,password: password,confirmpassword:confirmpassword,name:username,organizationId:organizationId,roleId:roleId})
            .pipe(map((res: any) => {
                // login successful if there's a jwt token in the response
                debugger;
                console.log(res);               
                if(res && res.stuscode != 200) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    
                }     
                return res;
            }));
    }
   
}