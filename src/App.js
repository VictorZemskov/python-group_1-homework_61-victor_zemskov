import React, { Component } from 'react';
import './App.css';
import Home from "./containers/Home/Home";
import Contacts from "./containers/Contacts/Contacts";
import AboutUs from "./containers/AboutUs/AboutUs";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about_us" exact component={AboutUs}/>
                <Route path="/contacts" exact component={Contacts}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
