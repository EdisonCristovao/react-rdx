import React, { Component } from 'react';
import Item from './component/item'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Item text="Algum texto muito loco que eu coloquei aqui"></Item>
        <Item text="qualquer texto"></Item>
      </div>
    );
  }
}

export default App;
