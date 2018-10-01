import React, { Component } from 'react';
import './App.css';
import InsuranceContainer from './components/containers/InsuranceContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <InsuranceContainer/>
      </div>
    );
  }
}

export default App;
