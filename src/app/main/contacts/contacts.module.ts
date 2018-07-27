
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactswRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { HeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    ContactswRoutingModule,
    HeaderModule
  ],
  declarations: [
    ContactsComponent,
  ]
})

export class ContactsModule{
}
