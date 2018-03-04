import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FetchPassWordPage } from './fetch-pass-word';

@NgModule({
  declarations: [
    FetchPassWordPage,
  ],
  imports: [
    IonicPageModule.forChild(FetchPassWordPage),
  ],
})
export class FetchPassWordPageModule {}
