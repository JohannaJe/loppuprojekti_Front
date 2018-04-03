import React from 'react';
import './Vaihtoehdot.css';

export class Vaihtoehdot extends React.Component {
    render(){
        return(
            <div className = "vaihtoehtoreuna">
                <button onClick={this.tulosta}>Listaa</button>
            </div>
    );
    }

    tulosta=(c) => {
        c.preventDefault();


    }
}

export default Vaihtoehdot;