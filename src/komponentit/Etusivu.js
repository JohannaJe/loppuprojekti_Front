import React, {Component} from 'react';
import {Vaihtoehdot} from "./Vaihtoehdot";
import {Listaus} from "./Listaus";
import './Etusivu.css';
import {haeLista, taulukkoon, poistaTaulukosta, taulukko, lahdetaulukko} from "./funktiot";

export class Etusivu extends Component {
    state = {testiLista: [], msg: "Haetaan dataa"}




    haeListaJaPaivita = () => {
        haeLista(function (lista) {
            this.setState({testiLista: lista, msg: null});
            console.log(this.state.testiLista);
        }.bind(this), lahdetaulukko);

    }

    toggleHS = () => {
        if (lahdetaulukko.indexOf("HS") > -1) {
            poistaTaulukosta("HS");
        } else {
            taulukkoon("HS");
        }

    }

    toggleIS = () => {
        if (lahdetaulukko.indexOf("IS") > -1) {
            poistaTaulukosta("IS");
        } else {
            taulukkoon("IS");
        }

    }

    toggleBBC = () => {
        if (lahdetaulukko.indexOf("BBC") > -1) {
            poistaTaulukosta("BBC");
        } else {
            taulukkoon("BBC");
        }
    }

       render(){
        return(
            <div className ="tausta">
<<<<<<< HEAD
                <p>Your Personal Bubble</p>
            <Vaihtoehdot haefunktio={this.haeListaJaPaivita} HS={this.lisaaHS} IS={this.lisaaIS} BBC={this.lisaaBBC} poistafunktio={this.poistaLista}/>
=======
            <Vaihtoehdot haefunktio={this.haeListaJaPaivita} HS={this.toggleHS} IS={this.toggleIS} BBC={this.toggleBBC}/>
>>>>>>> 84fc9541af2a039c280e8930a50dadad93a782fd
            <Listaus lista={this.state.testiLista}/>
            </div>
        );
    }
}
