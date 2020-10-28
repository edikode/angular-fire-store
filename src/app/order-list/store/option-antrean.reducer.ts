import * as OptionAction from './option-antrean.actions';
import { settingAntrean } from 'src/app/shared/option.model';

export interface State {
    settingAntrean: settingAntrean
}
  
const initialState: State = {
    settingAntrean: {
        status: false,
        current: 0,
        total: 0
    }
};

export function OptionAntreanReducer(state = initialState, action: OptionAction.OptionAntreanActions) {

    switch(action.type) {
        case OptionAction.SET_OPTION: 
            return {
                ...state,
                settingAntrean: action.payload
            };

        default:
            return state;
    }
}