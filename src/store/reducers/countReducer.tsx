import {FETCH, ADDNUMBER, GETDATA, ERROR} from '../../constants';
import {COUNTACTIONS} from '../actions';

const InitialValue : {loading:boolean, number:number} = {
    loading : false,
    number: 0,
};

export function countReducer (state = InitialValue, action:COUNTACTIONS) {
    switch(action.type){
        case FETCH:
            return {
                ...state,
                loading: true,
            }
        case ADDNUMBER:
            return {
                ...state,
                number: state.number + action.payload,
            }
        case GETDATA:
            return {
                ...state,
                loading:false,
                number: state.number + action.payload,
            }
        case ERROR:
            return;
        default:
            return state;
    }
};
