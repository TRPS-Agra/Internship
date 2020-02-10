import { Component, OnInit } from '@angular/core';
import { FranchiseAuthorizationService } from 'src/app/Shared/franchise-authorization.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Component({
  selector: 'app-franchise-signup',
  templateUrl: './franchise-signup.component.html',
  styleUrls: ['./franchise-signup.component.css']
})
export class FranchiseSignupComponent implements OnInit {

  confirmCode : boolean = false;
  disableUserInput : boolean = true;
  error : string;

  signupFormGroup : FormGroup;

  constructor(private authFranch: FranchiseAuthorizationService, private _formBuilder: FormBuilder, private router: Router) { }
  verifyFormGroup: FormGroup;

  ngOnInit() {
    this.signupFormGroup = this._formBuilder.group({
      username: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+[0-9]*$')]],
      fname: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lname: ['',[Validators.required, Validators.pattern('[a-zA-z]+')]],
      email: ['',[Validators.required, Validators.email]],
      mobile: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9][0-9]*')]],
      password: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[0-9A-Za-z$@$!%*?&].{8,}')]],
      cpassword: ['', Validators.required],
      privacy : ['',[Validators.required]]
    });

    this.verifyFormGroup = this._formBuilder.group({
      vcode: ['', [Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]]
    });
  }

  checkBoxValue(event) {
    console.log(event.target.checked);
  }
  
  signUp(username, email, mobile, password) {
    // console.log(email, password);
    // console.log("+"+91+mobile);
    this.authFranch.register(username, email, "+"+91+mobile, password).subscribe(
      (data) => {
        this.confirmCode = true;
        this.disableUserInput = false;
      },
      (err) => {
        console.log(err);
        this.error = err.message;
      }
    );
  }

  verifyCode(vcode){
    this.authFranch.confirmAuthCode(vcode).subscribe(
      (data) => {
        this.router.navigateByUrl('/franchiseDetails');
      },

      (err) => {
        console.log(err);
        this.error = "Verification code is wrong."
      }
    )
    //  this.authFranch.vcode = vcode;
    //  this.router.navigate(['/adminChangePwd']);
  }
}

