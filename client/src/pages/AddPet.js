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


class AddPet extends Component {
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
        <PetNavBar />
        <PetinderLogo />
        <Container className='my-5 p-5 text-center'>
        <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body> 

        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control className='my-2' type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control className='my-2' type="age" placeholder="Age" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control className='my-2' as="select">
            <option>Dog</option>
            <option>Cat</option>
            <option>Fish</option>
            <option>Bird</option>
            <option>Horse</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Control className='my-2' as="select">
            <option>Frisky</option>
            <option>Shy</option>
            <option>Loud</option>
            <option>Playful</option>
          </Form.Control>
          </Form.Group>
    
      </Form>
          
              {/* CENTER BUTTON */}
              <Button className='w-50 m-2' variant='primary' onClick={this.onButtonClick}>Choose a file</Button>
        </Card.Body>
        </Card>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default AddPet
