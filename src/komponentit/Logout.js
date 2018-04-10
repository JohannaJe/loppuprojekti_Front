import React from 'react';
import './Login.css';
import {Etusivu} from "./Etusivu";

export class Logout extends React.Component {
    constructor(props) {
        super(props);
        localStorage.removeItem('accessToken')
        this.props.logindone();
        this.props.history.push("/");

    }

    // kirjauduUlos() {
    //     console.log('KLIKKK')
    //     localStorage.removeItem('accessToken');

    // }
    render(){
            return(
                <div>
                    <Etusivu/>
                </div>
            );


    }
}
