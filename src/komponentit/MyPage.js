import React from 'react';
import {Vaihtoehdot} from "./Vaihtoehdot";
import {haeLista, lahdetaulukko, poistaTaulukosta, taulukkoon} from "./funktiot";
import {muokkaus, rekisteroityminen} from "./rekisteroityminen";

export class MyPage extends React.Component {



    render(){
        return(
            <div>
                <Vaihtoehdot isAuthenticated={this.props.isAuthenticated}/>
            </div>
        );
    }
}