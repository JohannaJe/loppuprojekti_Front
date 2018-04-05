import React, {Component} from 'react';
import {Vaihtoehdot} from "./Vaihtoehdot";
import {Listaus} from "./Listaus";
import './Etusivu.css';
import {haeLista, taulukkoon, taulukko} from "./funktiot";

export class Etusivu extends Component {
    state = {testiLista: [], msg: "Haetaan dataa"}




    haeListaJaPaivita = () => {
        // Jos on hakusana:
        haeLista(function (lista) {
            this.setState({testiLista: lista, msg: null});
            console.log(this.state.testiLista);
        }.bind(this), taulukko()); // jälkimmäinen parametri haluttu stringi

    }

    lisaaHS = () => {
        taulukkoon("HS");

    }
    lisaaIS = () => {
        taulukkoon("IS");

    }

    lisaaBBC = () => {
        taulukkoon("BBC");


    }

    lisaaCNN = () => {
        taulukkoon("CNN");


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
            <Vaihtoehdot haefunktio={this.haeListaJaPaivita} HS={this.lisaaHS} IS={this.lisaaIS} BBC={this.lisaaBBC} CNN={this.lisaaCNN} poistafunktio={this.poistaLista}/>
            <Listaus lista={this.state.testiLista}/>
            </div>
        );
    }
}
