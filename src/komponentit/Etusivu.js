import React, {Component} from 'react';

import {Vaihtoehdot} from "./Vaihtoehdot";
import {Listaus} from "./Listaus";
import './Etusivu.css';
import {haeLista} from "./funktiot";

export class Etusivu extends Component {
    state = {testiLista: [], msg: "Haetaan dataa"}

    // componentDidMount() {
    //     this.haeListaJaPaivita();
    //
    // }

    haeListaJaPaivita = () => {
        haeLista(function (lista) {
            this.setState({testiLista: lista, msg: null});
            console.log(this.state.testiLista);
        }.bind(this));

    }

       render(){
        return(
            <div className ="reuna">
            <p>Tekstiä :-)</p>
            <Vaihtoehdot haefunktio={this.haeListaJaPaivita}/>
                {/*<button onClick={this.haeListaJaPaivita}>Listaa</button>*/}
            <Listaus lista={this.state.testiLista}/>
            </div>
        );
    }
}
