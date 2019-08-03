import React, { Component } from 'react'
import {
  Container,
  Col,
  Button,
  Form,
  Card,
  InputGroup,
  Alert
} from 'react-bootstrap'
import {
  Assignment as AssignmentIcon,
  Visibility,
  VisibilityOff
} from '@material-ui/icons/'
import md5 from 'md5'
import API from '../utils/API'

class ShelterRegister extends Component {
  state = {
    viewPassword: false,
    alert: {
      visible: false,
      header: '',
      msg: '',
      color: ''
    },
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  }

  /**
   * onButtonClick()
   * Event listener used for buttons
   */
  onButtonClick = () => {
    const { viewPassword, alert, ...shelterData } = this.state
    const { password } = shelterData
    // Send Request to server
    shelterData.password = md5(password)
    API.registerShelter(shelterData)
      .then(response => response.json())
      .then(results => {
        // console.log(results)
        // Check for error
        if (results.error) {
          // Error alert
          this.setState({
            alert: {
              visible: true,
              header: results.error,
              msg: 'Please Try Again',
              color: 'danger'
            },
            name: '',
            email: '',
            password: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            phone: ''
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
            },
            name: '',
            email: '',
            password: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            phone: ''
          })
          
        }
      })
      .catch(err => console.log(err))
  }
  /**
   * isEnable()
   * Used to keep button disable until all fields are completed
   */
  isEnable = () => {
    const {
      name,
      email,
      password,
      address,
      city,
      state,
      zipCode,
      phone
    } = this.state
    return (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      address.length > 0 &&
      city.length > 0 &&
      state.length > 0 &&
      zipCode.length > 0 &&
      phone.length > 0
    )
  }
  /**
   * onInputChange()
   * This will handle onChange event from
   * inputs
   */
  onInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })

    // console.log(this.state)
  }
  /**
   * togglePasswordView()
   * Used to change state of the view password input
   */
  togglePasswordView = () => {
    this.setState({ viewPassword: !this.state.viewPassword })
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
        <Container className='my-5 p-5 text-center'>
          {this.renderAlert()}
          <Card className=' my-3 text-center'>
            <Card.Header className='text-left'>
              <AssignmentIcon /> Register
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Control
                  name='name'
                  className='my-2'
                  size='lg'
                  type='text'
                  placeholder='Name'
                  onChange={this.onInputChange}
                  value={this.state.name}
                />
                <Form.Control
                  name='email'
                  className='my-2'
                  size='lg'
                  type='email'
                  placeholder='Enter email'
                  onChange={this.onInputChange}
                  value={this.state.email}
                />
                <InputGroup className='my-2'>
                  <Form.Control
                    name='password'
                    size='lg'
                    type={this.state.viewPassword ? 'text' : 'password'}
                    placeholder='Password'
                    onChange={this.onInputChange}
                    autoComplete='password'
                    value={this.state.password}
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
                <Form.Control
                  name='address'
                  className='my-2'
                  size='lg'
                  type='text'
                  placeholder='Address'
                  onChange={this.onInputChange}
                  value={this.state.address}
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
                      value={this.state.city}
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
                      value={this.state.state}
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
                      value={this.state.zipCode}
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
                  value={this.state.phone}
                />
              </Form>
              <Button
                className='w-50 m-2'
                variant='primary'
                onClick={this.onButtonClick}
                disabled={!this.isEnable()}
              >
                Register
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
}

export default ShelterRegister
