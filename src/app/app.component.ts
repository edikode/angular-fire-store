import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as OptionAntreanActions from './order-list/store/option-antrean.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFireStore';

  constructor(
    private store: Store<fromApp.AppState>
    ) {}

  ngOnInit() {
    this.getSettingAntrean();
  }
  
  getSettingAntrean = () => this.store.dispatch(new OptionAntreanActions.FetchOption());
}
