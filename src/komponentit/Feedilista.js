import React from "react";
import {lahdetaulukko, taulukkoon} from "./funktiot";
import './Feedilista.css'

export class Feedilista extends React.Component {



    render(){
        return(
            <div className="rivitettyTeksti">
                {lahdetaulukko}
            </div>

        );

    }

}