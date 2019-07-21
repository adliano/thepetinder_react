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

class AddPet extends Component {
  /**
   * onButtonClick()
   * Event listener used for buttons
   */
  onButtonClick = event => {
    let _element = event.target

    if (_element.textContent === 'User') {
      console.log('send user to user home page')
      // Place logic here later
    } else {
      console.log('send Shelter to shelter home page')
      // Place logic here later
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
        <Container className='my-5 p-5'>
          <Card>
            <Card.Header><h3>Add Pet</h3></Card.Header>
            <Card.Body>
              <Form>
                {/* Get Animal's name */}
                <Form.Group controlId='exampleForm.ControlInput1'>
                  <Form.Control
                    className='my-2'
                    type='text'
                    placeholder='Name' name='name'
                  />
                  {/* Get Animal's age */}
                  <Form.Control className='my-2' type='number' placeholder='Age' name='age'/>
                  {/* Get Animal's type */}
                  <Form.Control className='my-2' as='select'>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Fish</option>
                    <option>Bird</option>
                    <option>Horse</option>
                  </Form.Control>
                  {/* Get Animal's Attitude */}
                  <Form.Control className='my-2' as='select'>
                    <option>Frisky</option>
                    <option>Shy</option>
                    <option>Loud</option>
                    <option>Playful</option>
                  </Form.Control>
                  {/* Get Animal's picture */}
                  <Form.Label className='mt-3'>Animal's picture</Form.Label>
                  <Form.Control className='mb-3'
                    type='file'
                    name='petPicture'
                    accept='image/*'
                  />
                  {/* Upload Button */}
                  <Button
                    type='file'
                    value='upload'
                    name='imgPath'
                    className='w-25 mt-3'
                    variant='primary'
                    onClick={this.onButtonClick}
                  >
                    Upload
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default AddPet
