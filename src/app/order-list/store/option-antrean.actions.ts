import { Action } from '@ngrx/store';
import { Option } from 'src/app/shared/option.model';

export const ADD_OPTION = 'ADD_OPTION';

export class AddOption implements Action {
    readonly type= ADD_OPTION;
    payload: Option;
    
}