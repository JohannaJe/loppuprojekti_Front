import React from 'react';
import './Register.css';
import {rekisteroityminen} from "./rekisteroityminen";
import {lahdetaulukko, poistaTaulukosta, taulukkoon} from "./funktiot";
import "./RekisteroityvanVaihtoehdot";
import {RekisteroityvanVaihtoehdot} from "./RekisteroityvanVaihtoehdot";


export class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            data: ""
        }

    }

    uusiHenkilo = () => {

        taulukkoon(this.state.urltxt);
        let tmpdata = this.state;
        tmpdata.data = JSON.stringify(lahdetaulukko);


        rekisteroityminen(tmpdata, function (lista, virhe) {
            this.setState({name: "", username: "", email: "", password: "", data: []});
            lahdetaulukko.splice(0, lahdetaulukko.length)
            if (!virhe)
                this.props.history.push("/login");
        }.bind(this));


    }

    givePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    giveUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    giveEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    giveName(event) {
        this.setState({
            name: event.target.value
        });
    }

    giveData() {
        this.setState({

            data: JSON.stringify(lahdetaulukko
            )
        });
    }

    toggleURL = (event) => {

        this.setState({urltxt: event.target.value});
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

    toggleCNN = () => {
        taulukkoon("CNN-latest");


    }


    render() {
        return (
            <div className="registerreuna">
                <div className="teksti">
                    <p><b>BRAVO! LET'S BUILD YOUR BUBBLE:</b></p>
                    <p><b>1. Add your preferences by clicking the choices.</b></p>
                    <p><b>2. Click "Add to list" to create your personal news feed.</b></p>
                    <p><b>3. Insert a feed source url in the URL box and add it to your feed. </b></p>
                    <p><b>4. Pick a username and a password. </b></p>
                    <p><b>5. Press "Sign up".</b></p>
                </div>
                <RekisteroityvanVaihtoehdot URL={this.toggleURL} HS={this.toggleHS} IS={this.toggleIS} BBC={this.toggleBBC}
                             CNN={this.toggleCNN}/>
                <input type="text" value={this.state.name} onChange={(event) => this.giveName(event)}
                       placeholder="Name (3-40 characters)"/>
                <input type="text" value={this.state.username} onChange={(event) => this.giveUsername(event)}
                       placeholder="Username (3-15 characters)"/>
                <input type="email" value={this.state.email} onChange={(event) => this.giveEmail(event)}
                       placeholder="Email (max 40 characters)" required/>
                <input type="password" value={this.state.password} onChange={(event) => this.givePassword(event)}
                       placeholder="Password (6-20 characters) "/>
                <button
                    disabled={((this.state.name.length < 3 || this.state.name.length > 40) || (this.state.username.length < 3 || this.state.username.length > 15) ||
                        (this.state.email.length > 40) || (this.state.password.length < 6 || this.state.password.length > 20))

                    } onClick={this.uusiHenkilo} className="btn btn-info" type="submit">
                    Sign Up
                </button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
