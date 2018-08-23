import React, { Component } from 'react';
import './styles/App.css';
import List from './containers/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos:</h1>
        <List />
      </div>
    );
  }
}

export default App;
