import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NaviBar} from "./komponentit/NaviBar";
import {Etusivu} from "./komponentit/Etusivu";

class App extends Component {
  render() {
    return (
      <div className="App">
          <NaviBar/>
          <Etusivu/>
      </div>
    );
  }
}

export default App;
