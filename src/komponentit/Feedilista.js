import React from "react";
import {kirjautuneentaulukko, lahdetaulukko} from "./funktiot";
import './Feedilista.css'

export class Feedilista extends React.Component {



    render(){
        if (this.props.isAuthenticated) {
            return (
                <div className="rivitettyTeksti">
                    {kirjautuneentaulukko}
                </div>

            );
        }

            else{
            return (
                <div className="rivitettyTeksti">
                    {lahdetaulukko}
                </div>

            );
        }

    }

}