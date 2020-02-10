import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/Shared/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-changepassword',
  templateUrl: './customer-changepassword.component.html',
  styleUrls: ['./customer-changepassword.component.css']
})
export class CustomerChangepasswordComponent implements OnInit {

  changePwdFormGroup: FormGroup;
  msg : string;

  constructor( private auth: AuthorizationService, private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.changePwdFormGroup = this._formBuilder.group({
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[0-9A-Za-z$@$!%*?&].{7,}')]],
      cpassword: ['', Validators.required]
    });
  }

  confirmPwd(pwd){
    this.auth.confirmPwd(pwd).subscribe((data) => {
      this.msg = data;
      // console.log(data);
      setTimeout(() => {this.router.navigateByUrl('/adminLogin')}, 4000);
    },
    (err) => {
      this.msg = err.message;
      setTimeout(() => {this.router.navigateByUrl('/adminForgetPwd')}, 3000);
    })
  }
}
