import { Component, OnInit } from '@angular/core';
import { AntreanService } from '../shared/antrean.service';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  statusAntrean: boolean;

  constructor(
    public antreanService: AntreanService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.store.select('optionAntrean').subscribe(res => {
      if(res.settingAntrean) {
        // console.log(res.settingAntrean.status, "data setting");
        this.statusAntrean = res.settingAntrean.status ? res.settingAntrean.status : false;
      }
    });
  }

  saveRequest() {
    let data = this.antreanService.form.value;
    this.antreanService.createNewAntrean(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }

}
