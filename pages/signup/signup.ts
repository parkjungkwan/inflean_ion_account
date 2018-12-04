import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase'; 

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  private account : any = {
    name : '',
    email : '',
    password : ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password)
    .then((result) => {
      console.log(result); 

      var user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: this.account.name,
        photoURL: ""
      }).then(() => {
        console.log("login succss"); 
      }).catch((error) => {
        console.log(error.message); 
      });
    })
    .catch( (error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage); 
      // ...
    });

  }

}
