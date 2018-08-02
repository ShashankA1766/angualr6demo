import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from '../core/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  username: string;
  pwd: string;
  returnUrl: string;
  constructor(private loginService: LoginService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.returnUrl = this.route['dashboard'] || '/';
  }

  onSubmit(): void {
    this.username = this.model.username;
    this.pwd = this.model.password;
    var output = this.loginService.login(this.username, this.pwd).subscribe(
      data => {
        debugger;
        console.log(data);if(data.userId != 0){
        this.toastr.success('Login Successfull!', 'Success');
        this.router.navigate(['/main/dashboard']);
        }else{
          this.toastr.error('Invalid Credentials! Please check your credentials!', 'Error');
        }
      },
      error => {
        // this.error = error.statusText + ". Please check your credentials";
        this.loading = false;
        this.toastr.error('Please check your credentials', 'Error');
        console.log("Error Occured", error);
      });
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
          return;
        },
        error => {
          // this.error = error.statusText + ". Please check your credentials";
          console.log("Error Occured", error);
        });
  }

}