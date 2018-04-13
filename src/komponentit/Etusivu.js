import React, {Component} from 'react';
import {Vaihtoehdot} from "./Vaihtoehdot";
import {Listaus} from "./Listaus";
import './Etusivu.css';
import {Kuvaus} from "./Kuvaus";
import {haeLista, taulukkoon, poistaTaulukosta, lahdetaulukko} from "./funktiot";

export class Etusivu extends Component {
    state = {testiLista: [], msg: "Haetaan dataa"}


    haeListaJaPaivita = () => {

        var kirjautunut = this.props.isAuthenticated
        if (kirjautunut) {

            var data = this.props.kayttaja.data;
            taulukkoon(data)
        }

        haeLista(function (lista) {
            this.setState({testiLista: lista, msg: null});

        }.bind(this), lahdetaulukko);

        lahdetaulukko.splice(0, lahdetaulukko.length)


    }

    toggleHS = () => {
        if (lahdetaulukko.indexOf("HS") > -1) {
            poistaTaulukosta("HS");
        } else {
            taulukkoon("HS");
        }

    }

    toggleCNN = () => {
        taulukkoon("CNN-latest");


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

    render() {

        var kirjautunut = this.props.isAuthenticated
        if (kirjautunut) {
            return (
                <div className="kayttajatili">
                    <Listaus lista={this.state.testiLista} isAuthenticated={kirjautunut}
                             haefunktio={this.haeListaJaPaivita} kayttaja={this.props.kayttaja}/>

                </div>
            );

        } else {
            return (
                <div className="tausta">
                    <div className="intro">
                        <p><b>WELCOME TO BE FED WITH YOUR ABSOLUTE FAVOURITE NEWS</b></p>
                        <p><b>1. Add your preferences by clicking the choices.</b></p>
                        <p><b>2. Click "Add to list" to create your personal news feed.</b></p>
                        <p><b>3. Insert a feed source url in the URL box and add it to your feed. </b></p>
                        <p><b>4. Click "confirm" and <font color="#0099ff">Need4Feed</font> gets your news. </b></p>
                    </div>
                    <br/>
                    <Vaihtoehdot haefunktio={this.haeListaJaPaivita} HS={this.toggleHS} IS={this.toggleIS}
                                 BBC={this.toggleBBC} CNN={this.toggleCNN}/>

                    <Kuvaus/>
                    <Listaus lista={this.state.testiLista}/>

                </div>


            );
        }
    }

}
