import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable()
export class AdddContactService {
    serviceUrl: string = environment.url;
    addcontacturl: string = this.serviceUrl + "Contacts/addContact";

    constructor(private http: HttpClient) {
    }

    addcontact(
        contactID: 0,
        customerNumber: any,
        customerNumberStr: "string",
        salespersonID: "string",
        primaryPhone: "string",
        phoneExt: "string",
        phoneTypeID: 0,
        isDecisionMakerIdentified: true,
        primaryContact: "string",
        position: "string",
        contactEmail: "string",
        contactLinkedInURL: "string",
        companyURL: "string",
        organizationID: 0,
        originAdCode: "string",
        campaignAdCode: "string",
        industry: "string",
        leadStage: "string",
        lastContact: "2018-08-03T05:52:16.012Z",
        lastStepType: "string",
        nextStepWho: "string",
        nextStep: "2018-08-03T05:52:16.012Z",
        nextStepType: "string",
        nextStepNotes: "string",
        notes: "string",
        oneTimeEstimatedValue: 0,
        monthlyTimeEstimatedValue: 0,
        estimatedMonthlyAdSpend: 0,
        apptSetter: "string",
        webinarSignUpDate: "2018-08-03T05:52:16.012Z",
        firstWebinarDate: "2018-08-03T05:52:16.012Z",
        webinarName: "string",
        webinarDate: "2018-08-03T05:52:16.012Z",
        attendedWebinar: true,
        firstAppointment: "2018-08-03T05:52:16.012Z",
        saleDate: "2018-08-03T05:52:16.012Z",
        saleValue: "2018-08-03T05:52:16.012Z",
        excelId: 0,
        isActive: true,
        createdBy: 0,
        createdDate: "2018-08-03T05:52:16.012Z",
        updatedBy: 0,
        updatedDate: "2018-08-03T05:52:16.012Z",
        loggedInUserId: 0,
    ) {

        return this.http.post<any>(this.addcontacturl, {customerNumber:customerNumber,primaryPhone:primaryPhone,phoneExt:phoneExt,contactEmail:contactEmail,})
            .pipe(map((res: any) => {
                // login successful if there's a jwt token in the response
                debugger;
                console.log(res);
                if (res && res.userId != 0) {

                }
                return res;
            }));
    }
}