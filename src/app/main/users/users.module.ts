
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    HeaderModule
  ],
  declarations: [
    UsersComponent,
  ]
})

export class UsersModule{
}
