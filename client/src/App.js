import React, { Component } from 'react'
// Import Pages
// import SplashPage from './pages/SplashPage'
import ShelterLogin from './pages/Shelter_Login'
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
        <ShelterLogin />
        {/* <ShelterRegister /> */}
      </>
    )
  }
}

export default App
