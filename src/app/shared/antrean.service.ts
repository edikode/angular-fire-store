import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as _moment from "moment";
import { OptionAntreanService } from './option-antrean.service';

@Injectable({
  providedIn: 'root'
})
export class AntreanService {

  currentDate = _moment();
  filterDate = this.currentDate.format("DDMMYYYY");
  klinikId = "klinik1";

  form = new FormGroup({
    nama: new FormControl("", Validators.required ),
    no_antrean: new FormControl("", Validators.required )
  });

  constructor(
    private firestore: AngularFirestore,
    private optionAntreanService: OptionAntreanService,
    ) {}

  getAntrean() {
    // return this.firestore.collection("coffeeOrders").snapshotChanges();
    return this.firestore.collection("klinik").doc(this.klinikId).collection("antrean").doc(this.filterDate).collection("list").snapshotChanges();
  }

  //Firestore CRUD actions example
  createNewAntrean(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("klinik").doc(this.klinikId).collection("antrean").doc(this.filterDate).collection("list")
        .doc(data.no_antrean.toString())
        .set(data)
        .then(res => {

          this.optionAntreanService.updateTotalAntrean(data.no_antrean);
          if(data.no_antrean == 1){
            this.optionAntreanService.updateCurrentAntrean(0);
          }
          this.form.reset();

        }, err => reject(err));
    });
  }

  updateListAntrean(data) {
    return this.firestore
    .collection("klinik").doc(this.klinikId).collection("antrean").doc(this.filterDate).collection("list")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deleteListAntrean(data) {
    return this.firestore
    .collection("klinik").doc(this.klinikId).collection("antrean").doc(this.filterDate).collection("list")
      .doc(data.payload.doc.id)
      .delete();
  }
}
