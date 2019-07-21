import React, { Component } from 'react'
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

import {
  CloudUpload as CloudUploadIcon,
  Assignment as AssignmentIcon
} from '@material-ui/icons/'
// Use Application Components
import PetNavBar from '../components/PetNavBar'
import PetinderLogo from '../components/PetinderLogo'
import PetFooter from '../components/PetFooter'

class AddPet extends Component {
  state = {
    image: null,
  }
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
   * 
   */
  onImageSelected = event => {
    console.log(event.target.value);
    this.setState({image: URL.createObjectURL(event.target.files[0])})
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
        <Container className='my-5 p-5'>
          <Card>
            <Card.Header>
              <AssignmentIcon /> Add Pet
            </Card.Header>
            <Card.Body>
              <Form>
                {/* Get Animal's name */}
                <Form.Group controlId='exampleForm.ControlInput1'>
                  <Form.Control
                    className='my-2'
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={this.onInputChange}
                  />
                  {/* Get Animal's age */}
                  <Form.Control
                    className='my-2'
                    type='number'
                    placeholder='Age'
                    name='age'
                    onChange={this.onInputChange}
                  />
                  {/* Get Animal's type */}
                  <Form.Control className='my-2' as='select' onChange={this.onInputChange}>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Fish</option>
                    <option>Bird</option>
                    <option>Horse</option>
                  </Form.Control>
                  {/* Get Animal's Attitude */}
                  <Form.Control className='my-2' as='select' onChange={this.onInputChange}>
                    <option>Frisky</option>
                    <option>Shy</option>
                    <option>Loud</option>
                    <option>Playful</option>
                  </Form.Control>
                  {/* Get Animal's picture */}
                  <Form.Label className='mt-3'>Animal's picture</Form.Label>
                  <Form.Control
                    className='mb-3'
                    type='file'
                    name='petPicture'
                    accept='image/*'
                    // onChange={this.onInputChange}
                    onChange={this.onImageSelected}
                  />
                  {/* Image Preview */}
                  <Image src={this.state.image} width={200} />
                  <br/>
                  {/* Upload Button */}
                  <Button
                    type='file'
                    value='upload'
                    name='imgPath'
                    className='px-5 mt-3'
                    variant='primary'
                    onClick={this.onButtonClick}
                  >
                    <CloudUploadIcon className='mx-2' /> Upload
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
