import React, { Component } from 'react';

interface OwnProps{
    loginFetch:(email:string,password:string)=>any;
};

interface OwnState{
    email:string;
    password:string;
}

export class Login extends Component<OwnProps, OwnState> {
    constructor(props: OwnProps){
        super(props);
        this.state={
            email:'',
            password:'',
        }
    }

    render() {
        const {email, password} = this.state;
        const {loginFetch} = this.props;
        return (
            <div>
            <div>
                <input 
                onChange={(e)=>{
                    this.setState({
                        email:(e.target as HTMLInputElement).value
                    })
                }}
                placeholder='email'
                ></input>
            </div>
            <div>
                <input
                onChange={(e)=>{
                    this.setState({
                        password:(e.target as HTMLInputElement).value
                    })
                }}
                type='password'
                placeholder='password'
                ></input>
            </div>
            <button onClick={()=>{loginFetch(email, password)}}>LOGIN</button>
            </div>
        );
    }
}