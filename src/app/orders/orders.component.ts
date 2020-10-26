import { Component, OnInit } from '@angular/core';
import { AntreanService } from '../shared/antrean.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public antreanService: AntreanService) {}

  ngOnInit() {}

  saveRequest() {
    let data = this.antreanService.form.value;
    this.antreanService.createNewAntrean(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }

}
