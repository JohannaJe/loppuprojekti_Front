import React, {Component} from 'react';
import './App.css';
import {NaviBar} from "./komponentit/NaviBar";
import {Etusivu} from "./komponentit/Etusivu";
import {Login} from "./komponentit/Login";
import {Register} from "./komponentit/Register";
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NaviBar/>
                    <Route path="/home" component={Etusivu}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;