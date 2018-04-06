import React from 'react';
import './Listaus.css';


export class Listaus extends React.Component {

    render() {
        var kaikki = this.props.lista.map(function(x, index) {
            return(
                <div key={index}>
                    <p>{x.aikaleimaString}</p>
                    <p><a href={x.linkki}><img className="img-responsive img-thumbnail center-block" src={x.kuva} width="460" height="345" /></a></p>
                    <p><a href={x.linkki}>{x.otsikko}</a></p>

                <br/>
                    <br/>

                </div>
            )

        })

        return (
            <div className="listausreuna">
                    {kaikki}
            </div>
        );
    }

}

export default Listaus;