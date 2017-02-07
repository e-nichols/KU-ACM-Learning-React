import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Our Components
import HelloWorld from './components/HelloWorld'
import CoolButton from './components/CoolButton'
import ClickCounter from './components/ClickCounter'
import Timer from './components/Timer'
import ListExample from './components/ListExample'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>KU ACM: Learning React</h2>
        </div>
        <p className="App-intro">
          You've made it! Here are some example components.
        </p>
        Example Components Below.
        <div className="padded">
          <HelloWorld name="Evan" />
        </div>
        <div>
          <CoolButton color="red" />
        </div>
        <div className="padded">
          <ClickCounter />
        </div>
        <div className="padded">
          <Timer />
        </div>
        <div className="padded">
          <ListExample ListTitle="My Favorite Things"></ListExample>
        </div>
      </div>
    );
  }
}

export default App;
