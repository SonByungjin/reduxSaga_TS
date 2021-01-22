import {LOGIN} from '../../constants';
import {LOGINACTION} from '../actions';

const initialState : {status:Number, msg:string} = {
    status:0,
    msg:'',
};

export function loginReducer (state=initialState, action:LOGINACTION){
    switch(action.type){
        case LOGIN:
            return state;
        default: 
        return state;
    };
};
