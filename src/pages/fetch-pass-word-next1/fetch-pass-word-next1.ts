import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FetchPassWordNext2Page} from "../fetch-pass-word-next2/fetch-pass-word-next2";

/**
 * Generated class for the FetchPassWordNext1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fetch-pass-word-next1',
  templateUrl: 'fetch-pass-word-next1.html',
})
export class FetchPassWordNext1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchPassWordNext1Page');
  }

  goTo_next2() {
    this.navCtrl.push(FetchPassWordNext2Page)
  }
}
