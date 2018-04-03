import React from 'react';
import './Vaihtoehdot.css';
import Etusivu from "./Etusivu";

export class Vaihtoehdot extends React.Component {
    render(){
        return(
            <div className = "vaihtoehtoreuna">
                <button type="button" onClick={this.props.haefunktio}>Listaa</button>
            </div>
    );
    }

    tulosta=(c) => {
        c.preventDefault();

    }
}

