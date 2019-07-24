import React, { Component } from 'react'
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

// Use Application Components
import PetNavBar from '../components/PetNavBar'
import PetinderLogo from '../components/PetinderLogo'
import PetFooter from '../components/PetFooter'
import Alert from 'react-bootstrap/Alert'

import API from '../utils/API'

class ShelterRegister extends Component {
  state = {
    alert: {
      visible: false,
      header: '',
      msg: '',
      color: ''
    }
  }
  /**
   * onButtonClick()
   * Event listener used for buttons
   */
  onButtonClick = event => {
    const { alert, ...shelterData } = this.state
    // Send Request to server
    API.registerShelter(shelterData)
      .then(response => response.json())
      .then(results => {
        // Check for error
        if (results.error) {
          // Error alert
          this.setState({
            alert: {
              visible: true,
              header: results.error,
              msg: 'Please Try Again',
              color: 'danger'
            }
          })
        }
        // If no error display welcome message
        else {
          this.setState({
            alert: {
              visible: true,
              header: 'Welcome!',
              msg: `Registration Completed for ${this.state.name}`,
              color: 'success'
            }
          })
        }
      })
      .catch(err => console.log(err))
  }
  /**
   *
   *
   */
  onInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  /**
   * renderAlert()
   */
  renderAlert = () => {
    const { visible, header, msg, color } = this.state.alert

    if (!visible) {
      return null
    }
    return (
      <Alert
        className='text-center'
        variant={color}
        onClose={() => this.setState({ alert: { visible: false } })}
        dismissible
      >
        <Alert.Heading>{header}</Alert.Heading>
        <p>{msg}</p>
      </Alert>
    )
  }
  /**
   *
   * Render
   *
   */
  render () {
    return (
      <>
        <PetNavBar />
        {this.renderAlert()}
        <PetinderLogo />
        <Container className='my-5 p-5 text-center'>
          <Card className='text-center'>
            <Card.Header />
            <Card.Body>
              <Form>
                <Form.Control
                  name='name'
                  className='my-2'
                  size='lg'
                  type='text'
                  placeholder='Name'
                  onChange={this.onInputChange}
                />
                <Form.Control
                  name='email'
                  className='my-2'
                  size='lg'
                  type='email'
                  placeholder='Enter email'
                  onChange={this.onInputChange}
                />
                <Form.Control
                  name='password'
                  className='my-2'
                  size='lg'
                  type='password'
                  placeholder='Password'
                  onChange={this.onInputChange}
                  autoComplete='password'
                />
                <Form.Control
                  name='passwordConfirm'
                  className='my-2'
                  size='lg'
                  type='password'
                  placeholder='Confirm Password'
                  autoComplete='password'
                />
                <Form.Control
                  name='address'
                  className='my-2'
                  size='lg'
                  type='text'
                  placeholder='Address'
                  onChange={this.onInputChange}
                />
                <Form.Row>
                  <Col sm>
                    <Form.Control
                      name='city'
                      className='my-2'
                      size='lg'
                      type='text'
                      placeholder='City'
                      onChange={this.onInputChange}
                    />
                  </Col>
                  <Col sm>
                    <Form.Control
                      name='state'
                      className='my-2'
                      size='lg'
                      type='text'
                      placeholder='State'
                      onChange={this.onInputChange}
                    />
                  </Col>
                  <Col sm>
                    <Form.Control
                      name='zipCode'
                      className='my-2'
                      size='lg'
                      type='number'
                      placeholder='Zip Code'
                      onChange={this.onInputChange}
                    />
                  </Col>
                </Form.Row>
                <Form.Control
                  name='phone'
                  className='my-2'
                  size='lg'
                  type='number'
                  placeholder='Phone Number'
                  onChange={this.onInputChange}
                />
              </Form>
              {/* CENTER BUTTON */}
              <Button
                className='w-50 m-2'
                variant='primary'
                onClick={this.onButtonClick}
              >
                Register
              </Button>
            </Card.Body>
          </Card>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default ShelterRegister
