import {all} from 'redux-saga/effects';
import {CntSaga} from './saga';

export function* rootSaga(){
    yield all ([CntSaga()]);
};