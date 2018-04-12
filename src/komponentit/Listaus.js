import React from 'react';
import './Listaus.css';
import {haeLista, lahdetaulukko, kirjautuneentaulukko, kirjautuneenTaulukkoon} from "./funktiot";


export class Listaus extends React.Component {
    state = {kirjautuneenLista: []}

    haeListaJaPaivita = () => {
        var data = this.props.kayttaja.data;
        kirjautuneenTaulukkoon(data)
        haeLista(function (lista) {
            this.setState({kirjautuneenLista: lista, msg: null});
        }.bind(this), kirjautuneentaulukko);

        kirjautuneentaulukko.splice(0, kirjautuneentaulukko.length)


    }

    componentWillMount() {
        if (this.props.isAuthenticated) {
            this.haeListaJaPaivita()

        }
    }

    render() {

        var lista;
        if (this.props.isAuthenticated) {

            lista = this.state.kirjautuneenLista


        } else {
            lista = this.props.lista
        }

        var kaikki = lista.map(function (x, index) {
            return (
                <div className="listausreuna" key={index}>
                    <div>
                        <p className="aikaleima">{x.aikaleimaString}</p>
                        <p><a target="_blank" href={x.linkki}><img className="img-responsive img-thumbnail center-block" alt=""
                                                   src={x.kuva}
                                                   width="30%" height="20%"/></a></p>
                        <p id="otsikkolinkki"><a class="linkki" target="_blank" href={x.linkki}>{x.otsikko}</a></p>

                        <br/>
                        <br/>

                    </div>
                </div>)


        })

        return (
            <div className="listausreuna">
                {kaikki}
            </div>
        );
    }

}

export default Listaus;