import React from 'react';
import './Register.css';
import {rekisteroityminen} from "./rekisteroityminen";



export class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

//state sisältää username ja password
    uusiHenkilo = () => {
        rekisteroityminen(this.state, function(lista) {
            this.setState({username: "", password: ""});
        }.bind(this));

    }

    giveUsername(event){
        this.setState({
            username: event.target.value
        });
    }

    givePassword(event){
        this.setState({
            password: event.target.value
        });
    }


    render(){
        return(
            <div className = "registerreuna">
                <input type="text" value={this.state.username} onChange={(event) => this.giveUsername(event)} placeholder="username"/>
                <input type="password" value={this.state.password} onChange={(event) => this.givePassword(event)} placeholder="password"/>
                <button onClick={this.uusiHenkilo} className="btn btn-info" type="submit">
                    Sign Up
                </button>
            </div>
        );
    }
}

