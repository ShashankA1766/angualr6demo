import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { ContactService } from './contacts.service';
import { contactsModel } from './models/contactsModel';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ContactsComponent implements OnInit {
  model: any = {};
  showAddContactDialogbox = false;
  listContacts: contactsModel[];

  constructor(private contactService: ContactService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.getContactsList();
  }

  getContactsList = function () {
    this.contactService.fetchContacts().subscribe((data: contactsModel[]) => {
      this.listContacts = data;
    });
  }
  showDialogBox = function () {
    this.showAddContactDialogbox = !this.showAddContactDialogbox
  }

}

