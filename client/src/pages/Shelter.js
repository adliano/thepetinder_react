import React, { Component } from 'react'
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// Use Application Components
import PetNavbar from '../components/PetNavBar'
import PetFooter from '../components/PetFooter'
import PetinderLogo from '../components/PetinderLogo'








/////////////////////////////////////////////////////////////////////////////
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'






/**
 * PrivateRoute() used to make routes private
 * @param {json} json object with components
 * @param {objec} user from backend
 */
function PrivateRoute ({ component: Component, ...rest }, user) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/ShelterLogin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}
/**
 * 
 * 
 */
const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
/////////////////////////////////////////////////////////////////////







/**
 * Page used for splash, it will have two buttons to 
 * route user || shelter to espesific page
 */
class SplashPage extends Component {
    /**
     * onButtonClick()
     * Event listener used for buttons
     */
    onButtonClick = (event) => {
        
        let _element = event.target
        
        if(_element.textContent === 'User'){
            console.log('send user to user home page')
            //Place logic here later
        }
        else{
            console.log('send Shelter to shelter home page')
            //Place logic here later
        }
    }
  /**
   * 
   * Render
   * 
   */
  render () {
    return (
      <>
        <PetNavbar />
        <PetinderLogo />
        <Container className='my-2 p-2 text-center'>
          <Row>
            <h1 className='p-2 row mt-3 mx-auto text-center mx-3'>
        Animals and Universal Consciouness
            </h1>
          </Row>
          <Row className='p-3'>
        <p className="px-1">
          Our mission is simple: Make technology an asset for animal lovers.
        <br />
          Our clients are people that love animals and are interested in contributing to reduce the number of animals in shelters.
          The greatest defense to our pet overpopulation crisis is a well-informed community.
          Make sure that your friends and family are aware of the pet overpopulation crisis and how their personal actions can help solve or contribute to the problem.
        <br />
        </p>
          </Row>
          <Row className='m-3 p-2'>
              <Col md>
              <Button className='w-25 m-2' variant='primary' onClick={this.onButtonClick}href='/AvaliablePetsPage'>Avaliable Pets</Button>
              </Col>
              <Col md>
              <Button className='w-25 m-2' variant='primary' onClick={this.onButtonClick}href='/AddPet'>Add Pet</Button>
              </Col>
          </Row>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default SplashPage
