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
      <h1>Change da world my final message, Goodbye :O</h1>
      <Header />

      <Switch>
        <Route path = "/checkout">
            <Checkout />
        </Route>

        <Route path = "/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
      //<Route path = "/">     this is the default route and should be at the bottom
  );
}

export default App;
