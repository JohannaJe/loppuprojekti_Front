import React from 'react';
import './Register.css';
import {rekisteroityminen} from "./rekisteroityminen";
import {haeLista, lahdetaulukko, poistaTaulukosta, taulukkoon} from "./funktiot";
import {Vaihtoehdot} from "./Vaihtoehdot";



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

    componentWillMount() {

        //tänne ehkä jtn, esim taulukon täyttö ennen kun se stringifyiataan

    }



    uusiHenkilo = () => {




        console.log('TÄÄÄ', this.state.data)
        rekisteroityminen(this.state, function(lista) {
            this.setState({name: "", username: "", email: "", password: "",  data: ""});
        }.bind(this));


    }

    givePassword(event){
        this.setState({
            password: event.target.value
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

    giveName(event){
        this.setState({
            name: event.target.value,
            data: []//JSON.stringify(lahdetaulukko)    tänne lähteet stringinä
        });
    }

    // giveData(event){
    //     console.log('AAAAAAAAAAA')
    //     this.setState({
    //        data: event.target.value
    //     });
    //     console.log(JSON.stringify(lahdetaulukko), 'JOOOOO')
    // }

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

    render(){
        return(
            <div className = "registerreuna">
                <p><b>Bravo! Let's create your bubble:</b></p>
                <br/>
                <input type="text" value={this.state.name} onChange={(event) => this.giveName(event)} placeholder="name"/>
                <input type="text" value={this.state.username} onChange={(event) => this.giveUsername(event)} placeholder="username"/>
                <input type="text" value={this.state.email} onChange={(event) => this.giveEmail(event)} placeholder="email"/>
                <input type="password" value={this.state.password} onChange={(event) => this.givePassword(event)} placeholder="password"/>
                {/*<input type="text" value={this.state.data} onChange={(event) => this.giveData(event)} placeholder="data"/>*/}
                {/*<button onClick={this.giveData.bind(this)}>Datanappi</button>*/}
                <button onClick={this.uusiHenkilo} className="btn btn-info" type="submit">
                    Sign Up
                </button>
                <Vaihtoehdot  HS={this.toggleHS} IS={this.toggleIS} BBC={this.toggleBBC}/>
            </div>
        );
    }
}

