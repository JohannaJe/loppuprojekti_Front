import React from 'react';
import {Vaihtoehdot} from "./Vaihtoehdot";
import {haeLista, lahdetaulukko, poistaTaulukosta, taulukkoon} from "./funktiot";
import {muokkaus, rekisteroityminen} from "./rekisteroityminen";

export class MyPage extends React.Component {



    render(){
        return(
            <div className="omasivu">
                <Vaihtoehdot appi={this.props.appi} isAuthenticated={this.props.isAuthenticated} kayttaja={this.props.kayttaja} history={this.props.history}/>
            </div>
        );
    }
}