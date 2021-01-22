import axios from 'axios';
import {put, delay, takeEvery} from 'redux-saga/effects';
import {fetch, getData, login, Login} from '../actions';
import {ADDNUMBER, LOGIN} from '../../constants';

function* addSaga(){
    // try{
    //     const data = yield axios.post(
    //         'http://0.0.0.0:9002/api/v2/barong/identity/users/email/generate_code',
    //         {email:"wrong@email.com"});
    //     console.log(data);
    // } catch(error){
    //     console.log(error);
    // }
    // yield put(fetch());
    // yield delay(1000);
    // yield put(getData(Number(data.data.limit)));
};

function* loginSaga(action : Login){
    try{
        const data = yield axios.post(
            'http://0.0.0.0:9002/api/v2/barong/identity/sessions',
            {email:action.payload});
        alert('로그인 성공')
    } catch(error){
        alert('로그인 실패')
    }
}

export function* CntSaga(){
    yield takeEvery (ADDNUMBER, addSaga);
    yield takeEvery (LOGIN, loginSaga);
};
