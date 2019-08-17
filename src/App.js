import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./Components/NavBar";
import { Routes } from "./Components/Routes";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
