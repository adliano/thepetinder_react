import React, { Component } from 'react';
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

import API from '../utils/API'


class ShelterRegister extends Component {
  state = {

  }
  /**
     * onButtonClick()
     * Event listener used for buttons
     */
    onButtonClick = (event) => {
       console.log('register the shelter');
       API.registerShelter(this.state)
       .then(response => response.json())
       .then(results => console.log(results))
  }
  /**
   * 
   * 
   */
  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    },
    () => console.log(this.state));
  };
  /**
  *   
  * Render
  * 
  */
  render () {
    return (
      <>
        <PetNavBar />
        <PetinderLogo />
        <Container className='my-5 p-5 text-center'>
        <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body> 
          <Form>
              <Form.Control name='name' className='my-2' size="lg" type="text" placeholder="Name" onChange={this.onInputChange} />
              <Form.Control name='email' className='my-2' size="lg" type="email" placeholder="Enter email" onChange={this.onInputChange} />
              <Form.Control name='password' className='my-2' size="lg" type="password" placeholder="Password" onChange={this.onInputChange} />
              <Form.Control name='passwordConfirm' className='my-2' size="lg" type="password" placeholder="Confirm Password" onChange={this.onInputChange} />
              <Form.Row>
              <Col sm>
                <Form.Control name='city' className='my-2' size="lg" type="text" placeholder="City" onChange={this.onInputChange} />
              </Col>
              <Col sm>
              <Form.Control name='state' className='my-2' size="lg" type="text" placeholder="State" onChange={this.onInputChange} />
              </Col>
              <Col sm>
                <Form.Control name='zipCode' className='my-2' size="lg" type="number" placeholder="Zip Code" onChange={this.onInputChange} />
              </Col>
              </Form.Row>
              <Form.Control name='phone' className='my-2' size="lg" type="number" placeholder="Phone Number" onChange={this.onInputChange} />
            </Form>    
              {/* CENTER BUTTON */}
              <Button className='w-50 m-2' variant='primary' onClick={this.onButtonClick}>Register</Button>
        </Card.Body>
        </Card>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default ShelterRegister

