import { Component, OnInit } from '@angular/core';
import { AntreanService } from "../shared/antrean.service";
import { OptionAntreanService } from '../shared/option-antrean.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  statusAntrean: boolean = false;

  constructor(
    private antreanService: AntreanService,
    private optionAntreanService: OptionAntreanService,
    ) {}

  ngOnInit() {
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
        console.log(this.settingAntrean.length);
      });

  changeStatusAntrean(data){
    
    this.optionAntreanService.updateStatusAntrean(data ? false : true);
  } 
}
