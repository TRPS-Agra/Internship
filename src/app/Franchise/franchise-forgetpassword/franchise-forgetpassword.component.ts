import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/Shared/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-franchise-forgetpassword',
  templateUrl: './franchise-forgetpassword.component.html',
  styleUrls: ['./franchise-forgetpassword.component.css']
})
export class FranchiseForgetpasswordComponent implements OnInit {

  verifyFormGroup: FormGroup;
  confirmCode : boolean = false;
  disableUserInput : boolean = true;
  error : string;

  constructor( private auth: AuthorizationService, private router: Router, private _formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.verifyFormGroup = this._formBuilder.group({
      vcode: ['', [Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]]
    });
  }

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
