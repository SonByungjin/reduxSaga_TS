import {FETCH, ADDNUMBER, GETDATA, ERROR, LOGIN} from '../../constants';

interface Fetch {
    type: typeof FETCH;
};

interface Plus {
    type: typeof ADDNUMBER;
    payload: number;
};

interface Getdata {
    type: typeof GETDATA;
    payload: number;
};

interface Error {
    type: typeof ERROR;
};

export interface Login {
    type: typeof LOGIN;
    payload: string;
}

export type COUNTACTIONS =
    Fetch | Plus | Getdata | Error;

export type LOGINACTION = Login;

export const fetch = () : Fetch =>{
    return {
        type: FETCH,
    };
};

export const plus = (item:number): Plus => {
    return {
        type: ADDNUMBER,
        payload: item,
    };
};

export const getData = (val:number):Getdata => {
    return {
        type: GETDATA,
        payload:val,
    };
};

export const error = ():Error => {
    return {
        type: ERROR,
    };
};

export const login = (email: string): Login=>{
    return {
        type: LOGIN,
        payload: email,
    };
};