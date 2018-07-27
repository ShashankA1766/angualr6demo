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
export class ContactService {
    serviceUrl: string = environment.url;
    contactsListUrl: string = this.serviceUrl + "Contacts/all";
    constructor(private http: HttpClient) {
     }

    private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }

    fetchContacts() {
        return this.http.get(this.contactsListUrl)
            .pipe(map((res: any) => {
                return res;
            }));
    }
}