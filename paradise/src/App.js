import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom"

function App() {
  return (
    //Following BEM convention
    <Router>
    <div className="app">
      <Header />

      <Switch>
        <Route path = "/login">
            <h1>This is the Login Page</h1>
        </Route>
        <Route path = "/checkout">
            <Checkout />
        </Route>
        <Route path = "/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
      //<Route path = "/">     this is the default route and should be at the bottom
  );
}

export default App;
