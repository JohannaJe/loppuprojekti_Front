import React from 'react';
import './Login.css';
import {kirjauduSisaan} from "./rekisteroityminen";
import {Etusivu} from "./Etusivu";
import {App} from "../App"
import {isAuth} from "../App";
//import { withRouter } from "react-router-dom";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameOrEmail: "",
            password: ""
        }
    }


//state sisältää username ja password
    kirjaudu = () => {
        kirjauduSisaan(this.state, function(lista) {
            this.props.logindone();
            this.props.history.push("/");
        }.bind(this));
        this.setState({usernameOrEmail: "", password: ""});
    }


    giveUsernameOrEmail(event){
        this.setState({
            usernameOrEmail: event.target.value
        });
    }


    givePassword(event){
        this.setState({
            password: event.target.value
        });
    }




    render(){
        var kirjautunut = this.props.kayttaja
        if (!true) {
            console.log("JEEA!")
            return(
            <div>
                <Etusivu/>
            </div>
        );

        } else {
            console.log("EI NATSANNU")
        return(
            <div className = "registerreuna">
                <input type="text" value={this.state.usernameOrEmail} onChange={(event) => this.giveUsernameOrEmail(event)} placeholder="username or email"/>
                <input type="password" value={this.state.password} onChange={(event) => this.givePassword(event)} placeholder="password"/>
                <button onClick={this.kirjaudu} className="btn btn-info" type="submit">
                    Login
                </button>
            </div>

        );
        }
    }
}
