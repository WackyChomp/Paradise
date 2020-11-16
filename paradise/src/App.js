import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom"

function App() {
  return (
    //Following BEM convention
    <Router>
    <div className="app">
      <h1>Change da world my final message, Goodbye :O</h1>
      <Switch>
        <Route path = "/checkout">
          <header />

        </Route>

        <Route path = "/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
