import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { RouterModule } from '@angular/router';
import { LoginService } from './login/login.services';
import { AuthenticationService } from './core/auth.service';
import { ContactService } from './main/contacts/contacts.service';
import { UsersService } from './main/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,// required animations module
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    NgProgressRouterModule
  ],
  providers: [
    LoginService,
    AuthenticationService,
    ContactService,
    UsersService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
