import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from './users.service';
import { usersModel } from './models/Usersmodel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class UsersComponent implements OnInit {
  listUsers: usersModel[];
  constructor(private usersService: UsersService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.getusersList();
    }
  
    getusersList= function () {
      this.usersService.fetchUsers().subscribe((data: Array<usersModel>) => {
        this.listUsers = data;
      });
    }

}
