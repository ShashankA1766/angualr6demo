import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  model: any = {};
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  userRoleStr: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.username = this.model.username;
    this.email = this.model.email;
    this.firstName = this.model.firstName;
    this.lastName = this.model.lastName;
    this.userRoleStr = this.model.userRoleStr;

    alert('username'+this.username)



  }

  

}
