import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import * as OptionAntreanAction from './option-antrean.actions';

import * as _moment from "moment";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class OptionAntreanEffects {

  currentDate = _moment();
  filterDate = this.currentDate.format("DDMMYYYY");
  klinikId = "klinik1";

  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(OptionAntreanAction.FETCH_OPTION),
    switchMap(() => {
      return this.firestore.collection("klinik").doc(this.klinikId).collection("antrean").doc(this.filterDate).valueChanges();
    }),
    map(setting => {
      // console.log(setting);
      return new OptionAntreanAction.SetOption(setting);
    })
  );
  
  constructor(
    private actions$: Actions,
    private firestore: AngularFirestore
  ) {}
}