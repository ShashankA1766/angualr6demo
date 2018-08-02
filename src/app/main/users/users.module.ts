
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HeaderModule } from '../../shared';
import { AddUserComponent } from '../add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ],
  declarations: [
    UsersComponent,
    AddUserComponent
  ]
})

export class UsersModule{
}
