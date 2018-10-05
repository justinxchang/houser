import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/component/Header/Header'
// import Dashboard from '../src/component/Dashboard/Dashboard'
// import Wizard from '../src/component/Wizard/Wizard'
import routes from '../src/component/routes'


//no state
//no methods

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
