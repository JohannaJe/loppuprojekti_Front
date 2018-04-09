import React from 'react';
import './Login.css';
import {kirjauduSisaan} from "./rekisteroityminen";
import {Etusivu} from "./Etusivu";
import {App} from "../App"
import {isAuth} from "../App";
import {NaviBar} from "./NaviBar";

export class Logout extends React.Component {
    constructor(props) {
        super();
        localStorage.removeItem('accessToken')

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
