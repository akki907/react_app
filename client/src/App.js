import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from './components/Navbar';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Landing />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
