import React, {Component} from 'react';
import {Vaihtoehdot} from "./Vaihtoehdot";
import {Listaus} from "./Listaus";
import './Etusivu.css';
import {haeLista, taulukkoon, poistaTaulukosta, lahdetaulukko} from "./funktiot";

export class Etusivu extends Component {
    state = {testiLista: [], msg: "Haetaan dataa"}




    haeListaJaPaivita = () => {
        if (true) {
            var data = this.props.kayttaja.data;
            var juttu = this.props.kayttaja.username;
            console.log('jepA', juttu)
            taulukkoon(data)
        }
            console.log('jes', data, lahdetaulukko)
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
            <Vaihtoehdot haefunktio={this.haeListaJaPaivita} HS={this.toggleHS} IS={this.toggleIS} BBC={this.toggleBBC}/>
            <Listaus lista={this.state.testiLista}/>
            </div>
        );
    }
}
