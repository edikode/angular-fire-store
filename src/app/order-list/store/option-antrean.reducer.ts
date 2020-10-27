import * as OptionAction from './option-antrean.actions';
import { Option } from 'src/app/shared/option.model';

export interface State {
    settingAntrean: Option;
}
  
const initialState: State = {
    settingAntrean: new Option(false, 0, 0)
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