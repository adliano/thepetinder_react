import React, { Component } from 'react'
// Import Pages
import SplashPage from './pages/SplashPage'
import AddPet from './pages/AddPet'
import ShelterRegister from './pages/Shelter_Register'
// import ShelterLogin from './pages/Shelter_Login'
// import ShelterRegister from './pages/Shelter_Register'

// import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
  /**
   * Render
   */
  render () {
    return (
      <>
        {/* <SplashPage /> */}
        {/* <ShelterLogin /> */}
        {/* <ShelterRegister /> */}
        <AddPet/>
      </>
    )
  }
}

export default App
