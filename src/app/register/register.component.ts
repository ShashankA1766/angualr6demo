import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from '../core/auth.service';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './register.services';
import { LoginService } from '../login/login.services';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  email: string;
  username: string;
  password: string;
  confirmpassword: string;
  id: any;
  name: string;
  organizationId: any;
  roleId: any;
  returnUrl: string;
  constructor(private RegisterService: RegisterService,
    private authenticationService: AuthenticationService,
    private loginservice: LoginService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
  }
  onSubmit(): void {
    debugger;
    this.username = this.model.username;
    this.id = 0;
    this.email = this.model.email;
    this.password = this.model.password;
    this.confirmpassword = this.model.confirmpassword;
    this.name = this.model.username;
    this.organizationId = 0;
    this.roleId = 0;

    var output = this.RegisterService.register(this.username, this.id, this.email, this.password, this.confirmpassword, this.name, this.organizationId, this.roleId)
      .subscribe(data => {
        debugger;
        if (data!=null && data !='useralreadyExist') {         
                  
          this.toastr.success('Registration Successfull.Logging you in!', 'Success');
          this.login(this.username, this.password);

          }
        if(data=='useralreadyExist') {
          this.toastr.warning('User already Exist!', 'Error');
        }
        
      },
        error => {
          this.error = error.statusText + ". Please check your credentials";
          this.loading = false;
          this.toastr.error('something went wrong try again after sometime! ', 'Error');
          console.log("Error Occured", error);
        });

  }

  login(username, password) {
    this.loginservice.login(username, password)
      .subscribe(
        data => {
          debugger;
          console.log(data);
          if (data.userId != 0) {
            this.toastr.success('Login Successfull!', 'Success');
            this.router.navigate(['/main/dashboard']);
          } else {
            this.toastr.error('Invalid Credentials!', 'Error');
          }
        });

  }
}

