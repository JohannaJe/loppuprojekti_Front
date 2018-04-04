import React, {Component} from 'react';
import './App.css';
import {NaviBar} from "./komponentit/NaviBar";
import {Etusivu} from "./komponentit/Etusivu";
import {Login} from "./komponentit/Login";
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NaviBar/>
                    <Route path="/home" component={Etusivu}/>
                    <Route path="/login" component={Login}/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;