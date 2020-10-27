import { Component, OnInit } from '@angular/core';
import { AntreanService } from "../shared/antrean.service";
import { OptionAntreanService } from '../shared/option-antrean.service';
import { Store } from '@ngrx/store';
import { Option } from '../shared/option.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  statusAntrean: boolean = false;

  optionAntrean: Observable<{option: Option[]}>;

  constructor(
    private antreanService: AntreanService,
    private optionAntreanService: OptionAntreanService,
    private store: Store<{optionAntrean: {option: Option[] }}>
    ) {}

  ngOnInit() {
    this.optionAntrean = this.store.select('optionAntrean');
    console.log(this.optionAntrean);
    this.getAntrean();
    this.getStatusAntrean();
  }

  dataAntrean;
  settingAntrean;

  getAntrean = () =>
    this.antreanService
      .getAntrean()
      .subscribe(res => {
        this.dataAntrean = res;
        console.log(this.dataAntrean.length);
      });

  deleteAntrean = data => this.antreanService.deleteListAntrean(data);

  getStatusAntrean = () =>
    this.optionAntreanService
      .getStatusAntrean()
      .subscribe(res => {
        this.settingAntrean = res;
        if(this.settingAntrean){
          this.statusAntrean = this.settingAntrean.status ? this.settingAntrean.status : false;
          console.log(this.settingAntrean);
        }
      });

  changeStatusAntrean = data => this.optionAntreanService.updateStatusAntrean(data ? false : true);

}
