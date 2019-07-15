import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import PetNavBar from './components/PetNavBar'
import PetFooter from './components/PetFooter'

class App extends Component {
  render() {
    return (
      <>
      <PetNavBar/>
      <PetFooter/>
      </>
    );
  }
}

export default App;
