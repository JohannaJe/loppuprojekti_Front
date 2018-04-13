import React from 'react';
import {Vaihtoehdot} from "./Vaihtoehdot";

export class MyPage extends React.Component {


    render() {
        return (
            <div className="omasivu">
                <div className="intro">
                <p><b>YOU CAN UPDATE YOUR BUBBLE HERE</b></p>
                <p><b>1. Add your preferences by clicking the choices.</b></p>
                <p><b>2. Click "Add to list" to create your personal news feed.</b></p>
                <p><b>3. Insert a feed source url in the URL box and add it to your feed. </b></p>
                <p><b>4. Click "update" and <font color="#0099ff">Need4Feed</font> gets you fresh news. </b></p>
                </div>
                <br/>
                <Vaihtoehdot appi={this.props.appi} isAuthenticated={this.props.isAuthenticated}
                             kayttaja={this.props.kayttaja} history={this.props.history}/>

            </div>
        );
    }
}