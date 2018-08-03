
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactswRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { HeaderModule} from '../../shared';
import { DialogModule } from '../../shared';
import { AddContactComponent } from '../addcontact/addcontact.component';
@NgModule({
  imports: [
    CommonModule,
    ContactswRoutingModule,
    HeaderModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactsComponent,
    AddContactComponent
]
})

export class ContactsModule{
}
