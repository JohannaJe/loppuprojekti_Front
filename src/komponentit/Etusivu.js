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

    toggleCNN = () => {
        if (lahdetaulukko.indexOf("CNN") > -1) {
            poistaTaulukosta("CNN");
        } else {
            taulukkoon("CNN");
        }

    }

    poistaLista = () => {
        haeLista(function (lista) {
            this.setState({testiLista: [], msg: null});
            console.log(this.state.testiLista);
        }.bind(this));
    }


    toggleBBC = () => {
        if (lahdetaulukko.indexOf("BBC") > -1) {
            poistaTaulukosta("BBC");
        } else {
            taulukkoon("BBC");
        }

    }

       render()
        {
            return (
                <div className="tausta">

                    <Vaihtoehdot haefunktio={this.haeListaJaPaivita} HS={this.lisaaHS} IS={this.lisaaIS}
                                 BBC={this.lisaaBBC} CNN={this.lisaaCNN} poistafunktio={this.poistaLista}/>
                    <Listaus lista={this.state.testiLista}/>
                </div>
            );
        }

}
