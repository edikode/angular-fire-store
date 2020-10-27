import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import * as _moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class OptionAntreanService {

  currentDate = _moment();
  filterDate = this.currentDate.format("DDMMYYYY");
  klinikId = "klinik1";

  constructor(private firestore: AngularFirestore) { }

  getStatusAntrean() {
    // return this.firestore.collection("coffeeOrders").snapshotChanges();
    return this.firestore.collection("klinik").doc(this.klinikId).collection("antrean").doc(this.filterDate).snapshotChanges();
  }

  updateCurrentAntrean(value) {
    return this.firestore
    .collection("klinik").doc(this.klinikId).collection("antrean").doc(this.filterDate)
      .set({ current: value }, { merge: true });
  }

  updateTotalAntrean(value) {
    return this.firestore
    .collection("klinik").doc(this.klinikId).collection("antrean").doc(this.filterDate)
      .set({ total: value }, { merge: true });
  }

  updateStatusAntrean(value) {
    return this.firestore
    .collection("klinik").doc(this.klinikId).collection("antrean").doc(this.filterDate)
      .set({ status: value }, { merge: true });
  }
  
}
