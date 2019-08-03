import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Alert,
  Container,
  InputGroup,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap/'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import md5 from 'md5'

class ShelterLogin extends Component {
  state = {
    email: '',
    password: '',
    viewPassword: false,
    viewAlert: false
  }
  /**
   * onInputChange()
   * This will handle onChange event from
   * inputs
   */
  onInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  /**
   * validate forms
   */
  isEnable = () => {
    const { email, password } = this.state
    return email.length > 0 && password.length > 0
  }
  /**
   * togglePasswordView()
   * Used to toggle state of the view password input
   */
  togglePasswordView = () => {
    this.setState({ viewPassword: !this.state.viewPassword })
  }
  /**
   * renderAlert()
   */
  renderAlert = () => {
    const { viewAlert } = this.state
    if (!viewAlert) {
      return null
    }
    return (
      <Alert
        className='text-center'
        variant='danger'
        onClose={() => this.setState({ viewAlert: false })}
        dismissible
      >
        <Alert.Heading>Unable to Login</Alert.Heading>
        <p>Please check your Email and Password</p>
      </Alert>
    )
  }
  /**
   * onLoginClick()
   * Event listener used for buttons
   */
  onLoginClick = event => {
    event.preventDefault()
    const { email, password } = this.state
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: md5(password) })
    })
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.props.saveData(results)
      })
      .catch(err => this.setState({ viewAlert: true }))
  }
  /**
   *
   * Render
   *
   */
  render () {
    return (
      <>
        <Container className='my-5 p-5 text-center'>
          {this.renderAlert()}
          <Row>
            <Col md>
              <Form>
                <Form.Group >
                  <Form.Control
                    name='email'
                    size='lg'
                    type='email'
                    placeholder='Enter email'
                    onChange={this.onInputChange}
                  />
                  <InputGroup className='my-2'>
                    <Form.Control
                      name='password'
                      size='lg'
                      type={this.state.viewPassword ? 'text' : 'password'}
                      placeholder='Password'
                      onChange={this.onInputChange}
                      autoComplete='password'
                    />
                    <InputGroup.Append>
                      <Button
                        onClick={() => this.togglePasswordView()}
                        variant='outline-secondary'
                        aria-label='view password'
                      >
                        {this.state.viewPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='m-3 p-2'>
            <Col lg>
              <Button
                className='w-50 m-2'
                variant='primary'
                onClick={this.onLoginClick}
                disabled={!this.isEnable()}
              >
                Login
              </Button>
            </Col>
            <Col lg>
              <Link to='/ShelterRegister'>
                <Button className='w-50 m-2' variant='primary'>
                  Register
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default ShelterLogin
