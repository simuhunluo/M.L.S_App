import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import {BeforeLoginPage} from "../before-login/before-login";
import {AccountManagerPage} from "../account-manager/account-manager";

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

  goTo_settings() {
    this.navCtrl.push(SettingsPage);
  }

  goTo_accountManager(){
    this.navCtrl.push(AccountManagerPage)
  }
}
