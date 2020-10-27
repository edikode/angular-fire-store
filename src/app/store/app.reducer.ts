import { ActionReducerMap } from '@ngrx/store';
import * as  fromOptionAntrean from './../order-list/store/option-antrean.reducer';

export interface AppState {
    optionAntrean: fromOptionAntrean.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    optionAntrean: fromOptionAntrean.OptionAntreanReducer,
};