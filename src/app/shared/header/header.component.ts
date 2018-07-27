import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  username ='Amy Jackson';
  constructor(private route: ActivatedRoute,
    private authservice: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.checkForLoggedinUser();
  }


  checkForLoggedinUser(){
    let localStorageobject = JSON.parse(localStorage.getItem('currentUser'));
    if(localStorageobject != null){
      this.username = localStorageobject.username;
    }
    // else{
    //   this.router.navigate(['/']);
    // }
  }

  logoutUser =function(){
      // remove user from local storage to log user out
      this.authservice.logout();
      this.router.navigate(['/home']);
  }
}
