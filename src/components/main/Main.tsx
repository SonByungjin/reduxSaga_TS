import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {plus, login} from '../../store/actions';
import {Rootstate} from '../../store/reducers'
import {Login} from './Login';

export const Main = () => {
    const dispatch = useDispatch();
    const reduxCnt = useSelector((store:Rootstate)=>store.cnt); 

    const addNumber = () =>{
        dispatch(plus(1));
    };

    const loginFetch = (email:string, password:string) =>{
        if(email && password){
            dispatch(login(email));
        }else{
            alert('정보를 입력해주세요')
        }
    };

    return (
        <div>
            {/* <h1>Main</h1>
            <button onClick={addNumber}>PLUS</button>
            <h2>{reduxCnt?.number}</h2>
            <h2>{reduxCnt?.loading?'로딩중':'완료'}</h2> */}
            <Login loginFetch={loginFetch}/>
        </div>
    );
};
