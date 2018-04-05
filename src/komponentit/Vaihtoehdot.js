import React from 'react';
import './Vaihtoehdot.css';


export class Vaihtoehdot extends React.Component {
    render(){
        return(
            <div className = "vaihtoehtoreuna">
                <button type="button" onClick={this.props.haefunktioHS}>HS</button>
                <button type="button" onClick={this.props.haefunktioIS}>IS</button>
                <button type="button" onClick={this.props.haefunktioBBC}>BBC</button>
                <button type="button" onClick={this.props.poistafunktio}>Poista</button>
            </div>
    );
    }

    tulosta=(c) => {
        c.preventDefault();

    }
}

