import React from 'react';
import './Listaus.css';


export class Listaus extends React.Component {

    render() {
        var kaikki = this.props.lista.map(function(x) {
            return(
                <div>
                    {x.otsikko}
                    {x.linkki}
                    {x.aikaleima}
                <br/>
                    <br/>

                </div>
            )

        })

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