import { Injectable } from '@angular/core';
import { CognitoUserPool, AuthenticationDetails, CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';


const poolData = {
  UserPoolId : "us-east-2_k3qA1azQY",
  ClientId : "3nqq1p5pdvuklau8bmth9kidqa"
};

const userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})
export class FranchiseAuthorizationService {

  cognitoUser : any;
  userName : string;
  vcode : string;

  constructor() { }

  register(username, email, mobile, password) {

    const attributeList = [];

    const dataEmail = {  Name : 'email', Value : email }
    const dataPhone = { Name: 'phone_number', Value: mobile}
    
    const attributeEmail = new CognitoUserAttribute(dataEmail)
    const attributeContact = new CognitoUserAttribute(dataPhone)

    attributeList.push(attributeEmail, attributeContact);

    return Observable.create(observer => {
      userPool.signUp(username, password, attributeList, null, (err, result) => {
        if(err){
          console.log("signUp error", err);
          observer.error(err);
        }

        this.cognitoUser = result.user;
        console.log("signUp success", result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  confirmAuthCode(vcode) {
    const user = {
      Username : this.cognitoUser.username,
      Pool : userPool
    };

    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(vcode, true, function(err, result) {
        if(err) {
          console.log(err);
          observer.error(err);
        }
        console.log("Confirm Auth Code Success", result);
        observer.next(result);
        observer.complete();  
      });
    });
  }
  

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
