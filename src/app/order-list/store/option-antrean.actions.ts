import { Action } from '@ngrx/store';

export const SET_OPTION = 'SET_OPTION';
export const FETCH_OPTION = 'FETCH_OPTION';

export class SetOption implements Action {
    readonly type= SET_OPTION;

    constructor(public payload: any) {}
}

export class FetchOption implements Action {
    readonly type = FETCH_OPTION;
}

export type OptionAntreanActions =
  | SetOption
  | FetchOption;