import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { AuthorizationService } from 'src/app/Shared/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private auth: AuthorizationService, private router: Router) { }

  ngOnInit() {
  }

  // onclick($event) {
  //   console.log($event);
  //   $event.preventDefault();
  // }

  doLogout(){    
    this.auth.logOut();
    this.router.navigateByUrl('/adminLogin');
  }
  
}


