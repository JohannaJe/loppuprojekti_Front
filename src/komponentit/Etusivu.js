import React from 'react';

import {Vaihtoehdot} from "./Vaihtoehdot";
import {Listaus} from "./Listaus";
import './Etusivu.css';
import {haeLista} from "./funktiot";


export class Etusivu extends React.Component {
    state = {testiLista: [], msg: "Haetaan dataa"}

    componentDidMount() {
        this.haeListaJaPaivita();

    }
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
            <Vaihtoehdot/>
            <Listaus lista={this.state.testiLista}/>
            </div>
        );
    }


}