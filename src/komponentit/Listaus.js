import React from 'react';
import './Listaus.css';


export class Listaus extends React.Component {

    render() {
        var kaikki = this.props.lista.map(function(x) {
            return(
                <div>
                    <p>{x.aikaleima}</p>
                    <p><a href={x.linkki}><img src={x.kuva}/></a></p>
                    <p><a href={x.linkki}>{x.otsikko}</a></p>

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