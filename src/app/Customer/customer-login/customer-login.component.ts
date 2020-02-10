import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/Shared/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  
  error : string;

  constructor( private auth: AuthorizationService, private router: Router ) { }

  ngOnInit() {
  }

  signIn(username, password) {
    this.auth.signIn(username, password).subscribe((data) => {
      this.router.navigateByUrl('/adminDashboard');
    }, (err) => {
      this.error = err.message;
    });
  }

}
