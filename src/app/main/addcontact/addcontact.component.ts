import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { AdddContactService } from './addcontact.service';


@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AddContactComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';

  contactID: 0;
  customerNumber: any;
  customerNumberStr: "string";
  salespersonID: "string";
  primaryPhone: "string";
  phoneExt: "string";
  phoneTypeID: 0;
  isDecisionMakerIdentified: true;
  primaryContact: "string";
  position: "string";
  contactEmail: "string";
  contactLinkedInURL: "string";
  companyURL: "string";
  organizationID: 0;
  originAdCode: "string";
  campaignAdCode: "string";
  industry: "string";
  leadStage: "string";
  lastContact: "2018-08-03T05:52:16.012Z";
  lastStepType: "string";
  nextStepWho: "string";
  nextStep: "2018-08-03T05:52:16.012Z";
  nextStepType: "string";
  nextStepNotes: "string";
  notes: "string";
  oneTimeEstimatedValue: 0;
  monthlyTimeEstimatedValue: 0;
  estimatedMonthlyAdSpend: 0;
  apptSetter: "string";
  webinarSignUpDate: "2018-08-03T05:52:16.012Z";
  firstWebinarDate: "2018-08-03T05:52:16.012Z";
  webinarName: "string";
  webinarDate: "2018-08-03T05:52:16.012Z";
  attendedWebinar: true;
  firstAppointment: "2018-08-03T05:52:16.012Z";
  saleDate: "2018-08-03T05:52:16.012Z";
  saleValue: "2018-08-03T05:52:16.012Z";
  excelId: 0;
  isActive: true;
  createdBy: 0;
  createdDate: "2018-08-03T05:52:16.012Z";
  updatedBy: 0;
  updatedDate: "2018-08-03T05:52:16.012Z";
  loggedInUserId: 0;
  returnUrl: string;
  constructor(private AddContactService: AdddContactService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  onSubmit(): void {
    debugger;
    this.contactID = 0;
      this.customerNumber = this.model.customerNumber;
      this.customerNumberStr = null;
      this.salespersonID = null;
      this.primaryPhone = this.model.primaryPhone;
      this.phoneExt = this.model.phoneExt;
      this.phoneTypeID = 0;
      this.isDecisionMakerIdentified = true;
      this.primaryContact = null;
      this.position = null;
      this.contactEmail = this.model.contactEmail;
      this.contactLinkedInURL = null;
      this.companyURL = null;
      this.organizationID = 0;
      this.originAdCode = null;
      this.campaignAdCode = null;
      this.industry = null;
      this.leadStage = null;
      this.lastContact = '2018-08-03T05:52:16.012Z';
      this.lastStepType = null;
      this.nextStepWho = null;
      this.nextStep = '2018-08-03T05:52:16.012Z';
      this.nextStepType = null;
      this.nextStepNotes = null;
      this.notes = null;
      this.oneTimeEstimatedValue = 0;
      this.monthlyTimeEstimatedValue = 0;
      this.estimatedMonthlyAdSpend = 0;
      this.apptSetter = null;
      this.webinarSignUpDate = '2018-08-03T05:52:16.012Z';
      this.firstWebinarDate = '2018-08-03T05:52:16.012Z';
      this.webinarName = null;
      this.webinarDate = '2018-08-03T05:52:16.012Z';
      this.attendedWebinar = true;
      this.firstAppointment = '2018-08-03T05:52:16.012Z';
      this.saleDate = '2018-08-03T05:52:16.012Z';
      this.saleValue = '2018-08-03T05:52:16.012Z';
      this.excelId = 0;
      this.isActive = true;
      this.createdBy = 0;
      this.createdDate = '2018-08-03T05:52:16.012Z';
      this.updatedBy = 0;
      this.updatedDate = '2018-08-03T05:52:16.012Z';
      this.loggedInUserId = 0;
      
      var output = this.AddContactService.addcontact(
      this.contactID,
      this.customerNumber,
      this.customerNumberStr,
      this.salespersonID,
      this.primaryPhone,
      this.phoneExt,
      this.phoneTypeID,
      this.isDecisionMakerIdentified,
      this.primaryContact,
      this.position,
      this.contactEmail,
      this.contactLinkedInURL,
      this.companyURL,
      this.organizationID,
      this.originAdCode,
      this.campaignAdCode,
      this.industry,
      this.leadStage,
      this.lastContact,
      this.lastStepType,
      this.nextStepWho,
      this.nextStep,
      this.nextStepType,
      this.nextStepNotes,
      this.notes,
      this.oneTimeEstimatedValue,
      this.monthlyTimeEstimatedValue,
      this.estimatedMonthlyAdSpend,
      this.apptSetter,
      this.webinarSignUpDate,
      this.firstWebinarDate,
      this.webinarName,
      this.webinarDate,
      this.attendedWebinar,
      this.firstAppointment,
      this.saleDate,
      this.saleValue,
      this.excelId,
      this.isActive,
      this.createdBy,
      this.createdDate,
      this.updatedBy,
      this.updatedDate,
      this.loggedInUserId
    ).subscribe(
      data => {
        debugger;
        console.log(data);        

        if (data.userId != 0) {
          this.toastr.success('Contact Created Successfully!', 'Success');
          //this.router.navigate(['/main/addcontact']);
        } else {
          //this.toastr.error('Error in saving data!', 'Error');
        }
      },
      error => {
        // this.error = error.statusText + ". Please check your credentials";
        this.loading = false;
        this.toastr.error('Error in saving data.Please try again later!', 'Error');
        console.log("Error Occured", error);
      });
  }
  

}
