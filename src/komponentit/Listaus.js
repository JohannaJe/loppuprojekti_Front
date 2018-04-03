import React from 'react';
import './Listaus.css';


export class Listaus extends React.Component {

    render() {
        var kaikki = this.props.lista;
        return (
            <div className="listausreuna">
                <p>
                    {kaikki}
                </p>
            </div>
        );
    }

}

export default Listaus;