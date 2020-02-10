import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/Shared/authorization.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-forgetpassword',
  templateUrl: './admin-forgetpassword.component.html',
  styleUrls: ['./admin-forgetpassword.component.css']
})
export class AdminForgetpasswordComponent implements OnInit {

  verifyFormGroup: FormGroup;

  constructor( private auth: AuthorizationService, private router: Router, private _formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.verifyFormGroup = this._formBuilder.group({
      vcode: ['', [Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]]
    });
  }

  confirmCode : boolean = false;
  disableUserInput : boolean = true;
  error : string;

  forgetPwd(username){
    this.auth.userName = username;
    this.auth.forgetPwd(username).subscribe((data) => {
      this.confirmCode = true;
      this.disableUserInput = false;
    }, (err) => {
      // console.log(err.message);
      this.error = err.message;
    });
  }

  verifyCode(vcode){
     this.auth.vcode = vcode;
     this.router.navigate(['/adminChangePwd']);
  }
}