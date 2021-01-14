import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {     /*only runs when app component loads (if statement for react)*/

    auth.onAuthStateChanged(authUser => {
      console.log("The User is ...", authUser);

      if (authUser){    /*The user just logged in or the user was logged in. Persists after refreshing page*/
        dispatch({
          type: "SET_USER",      /*fires off event and shoots the user into the data layer*/
          user: authUser
        })
      }
        else{       /*The user is logged out*/
          dispatch({
            type: "SET_USER",
            user: null
          })
        }
    })
  }, [])

  return (
    //Following BEM convention
    <Router>
    <div className="app">
      <Switch>
        <Route path = "/login">
            <Login />
        </Route>
        <Route path = "/checkout">
            <Header />
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
