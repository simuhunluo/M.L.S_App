import { Component } from '@angular/core';

import { LessonPage } from '../lesson/lesson';
import { PlanPage } from '../plan/plan';
import { CommunityPage } from '../community/community';
import {MePage} from '../me/me';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LessonPage;
  tab2Root = PlanPage;
  tab3Root = CommunityPage;
  tab4Root = MePage;
  constructor() {

  }
}
