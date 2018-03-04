import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BeforeLoginPage} from "../before-login/before-login";

/**
 * Generated class for the AccountManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-manager',
  templateUrl: 'account-manager.html',
})
export class AccountManagerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountManagerPage');
  }
  goTo_before_login(){
    this.navCtrl.push(BeforeLoginPage);
  }
}
