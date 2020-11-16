import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    //Following BEM convention
    <div className="app">
      <h1>Change da world my final message, Goodbye :O</h1>
      <Header />
      <Home />

    </div>
  );
}

export default App;