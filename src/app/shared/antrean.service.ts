import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AntreanService {

  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    nama: new FormControl("", Validators.required ),
    no_antrean: new FormControl("", Validators.required )
  });

  //Firestore CRUD actions example
  createNewAntrean(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("klinik").doc("klinik1").collection("antrean").doc("02102020").collection("list")
        .doc(data.no_antrean.toString())
        .set(data)
        .then(res => {
          this.form.reset();
        }, err => reject(err));
    });
  }

  updateListAntrean(data) {
    return this.firestore
    .collection("klinik").doc("klinik1").collection("antrean").doc("02102020").collection("list")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getAntrean() {
    // return this.firestore.collection("coffeeOrders").snapshotChanges();
    return this.firestore.collection("klinik").doc("klinik1").collection("antrean").doc("02102020").collection("list").snapshotChanges();
  }

  deleteListAntrean(data) {
    return this.firestore
    .collection("klinik").doc("klinik1").collection("antrean").doc("02102020").collection("list")
      .doc(data.payload.doc.id)
      .delete();
  }
}
