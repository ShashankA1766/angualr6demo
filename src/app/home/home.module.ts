import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DialogModule } from '../shared';
import { NgProgressModule } from '@ngx-progressbar/core';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    NgProgressModule,
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ]
})

export class HomeModule {
}