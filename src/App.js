import React, { Component } from 'react';
import Header from './components/Header/Header';
import Entries from './components/Entries/Entries'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Entries />
      </div>
    );
  }
}

export default App;
