import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";

/**
 * Generated class for the BeforeLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-before-login',
  templateUrl: 'before-login.html',
})
export class BeforeLoginPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeforeLoginPage');
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: '抱歉，功能尚未开放',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  goTo_login() {
    this.navCtrl.push(LoginPage)
  }

  goTo_register() {
    this.navCtrl.push(RegisterPage)
  }
}
