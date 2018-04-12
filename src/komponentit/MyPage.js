import React from 'react';
import {Vaihtoehdot} from "./Vaihtoehdot";
import {haeLista, lahdetaulukko, poistaTaulukosta, taulukkoon} from "./funktiot";
import {muokkaus, rekisteroityminen} from "./rekisteroityminen";

export class MyPage extends React.Component {



    render(){
        return(
            <div className="omasivu">
                    <p><b>You can update your bubble here!</b></p>
              <br/>
                <Vaihtoehdot isAuthenticated={this.props.isAuthenticated} kayttaja={this.props.kayttaja}/>
            </div>
        );
    }
}