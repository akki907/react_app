import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/create" component={CreateForm} />
            <Route exact path="/tenant/Edit/:id" component={UpdateForm} />
            <Route exact path="/tenant/:id" component={UpdateForm} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
