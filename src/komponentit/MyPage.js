import React from 'react';
import {Vaihtoehdot} from "./Vaihtoehdot";

export class MyPage extends React.Component {


    render() {
        return (
            <div className="omasivu">
                <p><b>You can update your bubble here!</b></p>
                <br/>
                <Vaihtoehdot appi={this.props.appi} isAuthenticated={this.props.isAuthenticated}
                             kayttaja={this.props.kayttaja} history={this.props.history}/>

            </div>
        );
    }
}