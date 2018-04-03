import React from 'react';

import {Vaihtoehdot} from "./Vaihtoehdot";
import {Listaus} from "./Listaus";
import './Etusivu.css';


export class Etusivu extends React.Component {
    render(){
        return(
            <div className ="reuna">
            <p>Tekstiä :-)</p>
            <Vaihtoehdot/>
            <Listaus/>
            </div>
        );
    }

}