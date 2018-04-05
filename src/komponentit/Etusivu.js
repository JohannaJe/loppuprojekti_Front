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

    haeListaJaPaivitaHS = () => {
        // Jos on hakusana:
        haeLista(function (lista) {
            this.setState({testiLista: lista, msg: null});
            console.log(this.state.testiLista);
        }.bind(this), "HS"); // jälkimmäinen parametri haluttu stringi

    }
    haeListaJaPaivitaIS = () => {
        // Jos on hakusana:
        haeLista(function (lista) {
            this.setState({testiLista: lista, msg: null});
            console.log(this.state.testiLista);
        }.bind(this), "IS"); // jälkimmäinen parametri haluttu stringi

    }

    haeListaJaPaivitaBBC = () => {
        // Jos on hakusana:
        haeLista(function (lista) {
            this.setState({testiLista: lista, msg: null});
            console.log(this.state.testiLista);
        }.bind(this), "BBC"); // jälkimmäinen parametri haluttu stringi

    }

    poistaLista = () => {
        haeLista(function (lista) {
            this.setState({testiLista: [], msg: null});
            console.log(this.state.testiLista);
        }.bind(this));

    }

       render(){
        return(
            <div className ="tausta">
            <Vaihtoehdot haefunktioHS={this.haeListaJaPaivitaHS} haefunktioIS={this.haeListaJaPaivitaIS} haefunktioBBC={this.haeListaJaPaivitaBBC} poistafunktio={this.poistaLista}/>
            <Listaus lista={this.state.testiLista}/>
            </div>
        );
    }
}
