import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FranchiseAuthorizationService } from 'src/app/Shared/franchise-authorization.service';

@Component({
  selector: 'app-franchise-login',
  templateUrl: './franchise-login.component.html',
  styleUrls: ['./franchise-login.component.css']
})
export class FranchiseLoginComponent implements OnInit {

  error : string;

  constructor( private authFranch: FranchiseAuthorizationService, private router: Router ) { }
  

  ngOnInit() {
  }

  signIn(username, password) {
    this.authFranch.signIn(username, password).subscribe((data) => {
      this.router.navigateByUrl('/franchiseDashboard');
    }, (err) => {
      this.error = err.message;
    });
  }

}
