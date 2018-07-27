import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable()
export class UsersService {
    serviceUrl: string = environment.url;
    usersListUrl: string = this.serviceUrl + "user/GetAll";
    constructor(private http: HttpClient) {
     }

    fetchUsers() {
        return this.http.get(this.usersListUrl)
            .pipe(map((res: any) => {
                return res;
            }));
    }
}