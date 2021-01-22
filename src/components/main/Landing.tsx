import { throws } from 'assert';
import React, { Component } from 'react';

// interface OwnProps {
//     test : string;
// }

// type Props = OwnProps;

interface appProps {};
interface appState {
    val : string
}

export class Landing extends Component<appProps, appState>{
    constructor(props: appProps){
        super(props)
        this.state = {
            val:'test'
        }
    }
    render() {
        // const {test} = this.props
        return (
            <div>
                <input
                onChange={(e)=>{
                    this.setState({
                        val:(e.target as HTMLInputElement).value
                    })
                }}
                ></input>
                <h1>
                    {this.state.val}
                </h1>
            </div>
        );
    }
}
