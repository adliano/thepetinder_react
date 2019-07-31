import React, { Component } from 'react';
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// Use Application Components
import PetNavBar from '../components/PetNavBar'
import PetinderLogo from '../components/PetinderLogo'
import PetFooter from '../components/PetFooter'

import md5 from 'md5'

class ShelterLogin extends Component {
  state = {
    email: '', password: ''
  }
  /**
   * onInputChange()
   * This will handle onChange event from
   * inputs
   */
  // TODO: remove the console log
  onInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value },() => console.log(this.state))
  }
  /**
   * validate forms
   */
  isEnable = () => {
    // const { email, password } = this.state
    return (this.state.email.length > 0 && this.state.password.length > 0)
  }
  /**
     * onButtonClick()
     * Event listener used for buttons
     */
    onButtonClick = (event) => {

      const { email, password } = this.state

      fetch('/login',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email: email, password: md5(password)})
      })
      .then( response => {
        console.log(response)
        return response.json()
      })
      .then(results => {
        console.log(results)
        // TODO: remove the alert
        alert(`Welcome ${results.name} your id is ${results.id}`)
        this.setState({ user: results }, () => console.log(this.state) )
      })
      .catch(err => console.log(err))     
  }
  /**
  *   
  * Render
  * 
  */
  render () {
    // const { email, password } = this.state
    // let isEnable =  (email.length > 0 && password.length > 0)
    // console.log(isEnable);
    
    return (
      <>
        <PetNavBar />
        <PetinderLogo />
        <Container className='my-5 p-5 text-center'>
          <Row>
            <Col md>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control name='email' size="lg" type="email" placeholder="Enter email" onChange={this.onInputChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control name='password' size="lg" type="password" placeholder="Password" onChange={this.onInputChange} />
            </Form.Group>
          </Form>
            </Col>
          </Row>
        
          <Row className='m-3 p-2'>
            <Col lg>
              <Button className='w-50 m-2' variant='primary' onClick={this.onButtonClick} disabled={!this.isEnable()} >Login</Button>
            </Col>
            <Col lg>
              <Button className='w-50 m-2' variant='primary' href='/ShelterRegister'>Register</Button>
            </Col>
          </Row>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default ShelterLogin
