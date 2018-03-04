import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FetchPassWordNext1Page} from "../fetch-pass-word-next1/fetch-pass-word-next1";

/**
 * Generated class for the FetchPassWordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fetch-pass-word',
  templateUrl: 'fetch-pass-word.html',
})
export class FetchPassWordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchPassWordPage');
  }

  goTo_next1() {
    this.navCtrl.push(FetchPassWordNext1Page)
  }
}
