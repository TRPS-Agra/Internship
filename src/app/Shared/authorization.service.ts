import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { ASTWithSource } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';

const poolData = {
  UserPoolId : "us-east-2_lL2bq07sz",
  ClientId : "23vjaae4t8nakc4ei22grdqft7"
};

const userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  cognitoUser : any;
  userName : string;
  vcode : string;

  constructor() { }

  signIn(username, password) {

    const authenticationData = {
      Username : username,
      Password : password
    };

    const authenticationDetails =  new AuthenticationDetails(authenticationData);

    const userData = {
      Username : username,
      Pool : userPool
    };

    const cognitoUser = new CognitoUser(userData);
    
    return Observable.create(observer => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess : function(result) {
          observer.next(result);
          observer.complete();
        },

        onFailure : function(err) {
          observer.error(err);
        },
      });
    });
  }

  forgetPwd(username) {

    const userData = {
      Username : username,
      Pool : userPool
    };

    const cognitoUser = new CognitoUser(userData);

    return Observable.create(observer => {
      cognitoUser.forgotPassword({
        onSuccess : function (result) {
          // console.log('call result' + result);
          // console.log(result);
          observer.next(result);
          observer.complete();
        },
  
        onFailure : function (err) {
          observer.error(err);
        }
      });
    });

  }

  confirmPwd(pwd) {

    const userData = {
      Username : this.userName,
      Pool : userPool
    };

    const cognitoUser = new CognitoUser(userData);

    // console.log(this.vcode, pwd);

    
    return Observable.create(observer => {
      cognitoUser.confirmPassword(this.vcode, pwd, {
        onFailure (err) {
          // console.log(err);
          observer.error(err);
        },
  
        onSuccess () {
          // console.log('password reset')
          observer.next('Password reset successfully');
          observer.complete();
        }
      });
    })
    
  }

  isLoggedIn() {
    return userPool.getCurrentUser() != null;
  }

  getAuthenticatedUser() {
    return userPool.getCurrentUser();
  }

  logOut() {
    this.getAuthenticatedUser().signOut();
    this.cognitoUser = null;
  }
}
 