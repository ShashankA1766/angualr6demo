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
export class LoginService {
    serviceUrl: string = environment.url;
    authurl: string = this.serviceUrl + "User/GetUser";
    constructor(private http: HttpClient) { }

    private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }

    login(username: string, password: string) {
        
        return this.http.post<any>(this.authurl, { username: username, password: password})
            .pipe(map((res: any) => {
                // login successful if there's a jwt token in the response
                debugger;
                console.log(res);
                if (res && res.userId != 0) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username, userid: res.userid}));
                }
                return res;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}