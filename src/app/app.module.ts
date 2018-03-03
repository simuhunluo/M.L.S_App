import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LessonPage } from '../pages/lesson/lesson';
import { PlanPage } from '../pages/plan/plan';
import { CommunityPage } from '../pages/community/community';
import {MePage} from '../pages/me/me';
import { TabsPage } from '../pages/tabs/tabs';
import {WelcomePage} from "../pages/welcome/welcome";
import {SearchPage} from "../pages/search/search";
import {SettingsPage} from "../pages/settings/settings";
import {BeforeLoginPage} from "../pages/before-login/before-login";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {FetchPassWordPage} from "../pages/fetch-pass-word/fetch-pass-word";
import {FetchPassWordNext1Page} from "../pages/fetch-pass-word-next1/fetch-pass-word-next1";
import {FetchPassWordNext2Page} from "../pages/fetch-pass-word-next2/fetch-pass-word-next2";
import {AccountManagerPage} from "../pages/account-manager/account-manager";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LessonPage,
    PlanPage,
    CommunityPage,
    MePage,
    TabsPage,
    WelcomePage,
    SearchPage,
    SettingsPage,
    BeforeLoginPage,
    LoginPage,
    RegisterPage,
    FetchPassWordPage,
    FetchPassWordNext1Page,
    FetchPassWordNext2Page,
    AccountManagerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      // mode: 'ios',
      backButtonText: "",

    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LessonPage,
    PlanPage,
    CommunityPage,
    MePage,
    TabsPage,
    WelcomePage,
    SearchPage,
    SettingsPage,
    BeforeLoginPage,
    LoginPage,
    RegisterPage,
    FetchPassWordPage,
    FetchPassWordNext1Page,
    FetchPassWordNext2Page,
    AccountManagerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
