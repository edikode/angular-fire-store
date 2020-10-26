import { Component, OnInit } from '@angular/core';
import { AntreanService } from "../shared/antrean.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private antreanService: AntreanService) {}

  ngOnInit() {
    this.getAntrean();
  }

  dataAntrean;

  getAntrean = () =>
    this.antreanService
      .getAntrean()
      .subscribe(res => {
        this.dataAntrean = res;
        console.log(this.dataAntrean.length);
      });

  deleteAntrean = data => this.antreanService.deleteListAntrean(data);

  markCompleted = data => this.antreanService.updateListAntrean(data);

}
