import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap/'
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
    const { email, password } = this.state
    return (email.length > 0 && password.length > 0)
  }
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
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
        // alert(`Welcome ${results.name} your id is ${results.id}`)
        this.setState({ user: results }/*, () => console.log(this.state) */)
      })
      .catch(err => console.log(err))     
  }
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

  /**
  *   
  * Render
  * 
  */
  render () {
    return (
      <>
        <Container className='my-5 p-5 text-center'>
          <Row>
            <Col md>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control name='email' size="lg" type="email" placeholder="Enter email" onChange={this.onInputChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control name='password' size="lg" type="password" placeholder="Password" onChange={this.onInputChange} autoComplete='password' />
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
      </>
    )
  }
}

export default ShelterLogin
