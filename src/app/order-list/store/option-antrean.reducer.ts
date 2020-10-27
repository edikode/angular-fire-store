import { Action } from '@ngrx/store';

import * as OptionAction from './option-antrean.actions';
import { Option } from '../../shared/option.model';

const initialState = {
    option: [
        new Option(false, 0, 0)
    ]
}

export function OptionAntreanReducer(state = initialState, action: OptionAction.AddOption) {

    switch(action.type) {
        case OptionAction.ADD_OPTION: 
            return {
                ...state,
                option: [...state.option, action.payload]
            };

        default:
            return state;
    }
}