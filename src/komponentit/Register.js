import React from 'react';
import './Register.css';
import {rekisteroityminen} from "./rekisteroityminen";



export class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            username: "",
            email: "",
            password: ""
        }
    }

//state sisältää username ja password
    uusiHenkilo = () => {
        rekisteroityminen(this.state, function(lista) {
            this.setState({name: "", username: "", email: "", password: ""});
        }.bind(this));

    }

    giveName(event){
        this.setState({
            name: event.target.value
        });
    }

    giveUsername(event){
        this.setState({
            username: event.target.value
        });
    }

    giveEmail(event){
        this.setState({
            email: event.target.value
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
                <p><b>Bravo! Let's create your bubble:</b></p>
                <br/>
                <input type="text" value={this.state.name} onChange={(event) => this.giveName(event)} placeholder="name"/>
                <input type="text" value={this.state.username} onChange={(event) => this.giveUsername(event)} placeholder="username"/>
                <input type="text" value={this.state.email} onChange={(event) => this.giveEmail(event)} placeholder="email"/>
                <input type="password" value={this.state.password} onChange={(event) => this.givePassword(event)} placeholder="password"/>
                <button onClick={this.uusiHenkilo} className="btn btn-info" type="submit">
                    Sign Up
                </button>
            </div>
        );
    }
}

