import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from "src/environments/environment";
//angularfire imports
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OptionAntreanReducer } from './order-list/store/option-antrean.reducer';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    StoreModule.forRoot({optionAntrean: OptionAntreanReducer}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
