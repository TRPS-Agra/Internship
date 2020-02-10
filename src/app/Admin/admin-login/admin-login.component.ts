import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthorizationService } from 'src/app/Shared/authorization.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

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
