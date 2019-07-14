import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import shelterLogin from './pages/Shelter_Login';
import shelterRegister from './pages/Shelter_Register';

import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';

function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path='/' component={Splash} />
          <Route exact path='/Shelter_Login' component={shelterLogin} />
          <Route exact path='/Shelter_Register' component={shelterRegister} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App
