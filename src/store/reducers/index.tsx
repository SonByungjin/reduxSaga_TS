import {combineReducers} from 'redux';
import {countReducer} from './countReducer';
import {loginReducer} from './loginRedecer';

export const rootReducer = combineReducers({
    cnt : countReducer,
    log : loginReducer,
});

export type Rootstate = ReturnType<typeof rootReducer>;