import React, { Component } from 'react'
// Import Pages
// import SplashPage from './pages/SplashPage'
// import ShelterLogin from './pages/Shelter_Login'
import ShelterRegister from './pages/Shelter_Register'

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
        <ShelterRegister />
      </>
    )
  }
}

export default App

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Splash from './pages/Splash';
// import shelterLogin from './pages/Shelter_Login';
// import shelterRegister from './pages/Shelter_Register';

// import Navbar from './components/PetNavBar';
// import Wrapper from './components/Wrapper';
// // import Footer from './components/Footer';

// function App () {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path='/' component={Splash} />
//           <Route exact path='/Shelter_Login' component={shelterLogin} />
//           <Route exact path='/Shelter_Register' component={shelterRegister} />
//         </Wrapper>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   )
// }

// export default App
