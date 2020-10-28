import { Component, OnInit } from '@angular/core';
import { AntreanService } from "../shared/antrean.service";
import { OptionAntreanService } from '../shared/option-antrean.service';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  statusAntrean: boolean = false;

  dataAntrean;
  settingAntrean;

  constructor(
    private antreanService: AntreanService,
    private optionAntreanService: OptionAntreanService,
    private store: Store<fromApp.AppState>
    ) {}

  ngOnInit() {
    this.getAntrean();
    this.getStatusAntrean();
  }

  getStatusAntrean() {
    this.store.select('optionAntrean').subscribe(res => {
      if(res.settingAntrean) {
        this.statusAntrean = res.settingAntrean.status ? res.settingAntrean.status : false;
      }
    });
  }

  changeStatusAntrean = data => this.optionAntreanService.updateStatusAntrean(data ? false : true);

  getAntrean = () =>
    this.antreanService
      .getAntrean()
      .subscribe(res => {
        this.dataAntrean = res;
        // console.log(this.dataAntrean.length);
      });

  deleteAntrean = data => this.antreanService.deleteListAntrean(data);

}
