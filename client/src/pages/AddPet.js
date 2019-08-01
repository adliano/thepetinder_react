import React, { Component } from 'react'
import { Container, Button, Form, Card, Image } from 'react-bootstrap'
import {
  CloudUpload as CloudUploadIcon,
  Assignment as AssignmentIcon
} from '@material-ui/icons/'

class AddPet extends Component {
  state = {
    image: null
  }
  /**
   * onImageSelected(event)
   */
  onImageSelected = event => {
    console.log(event.target.value)
    this.setState({ imagePreview: URL.createObjectURL(event.target.files[0]) })
  }
  /**
   * onInputChange(event)
   */
  onInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value }, () => console.log(this.state))
  }
  /**
   * Render
   */
  render () {
    return (
      <>
        <Container className='my-5 p-5'>
          <Card>
            <Card.Header>
              <AssignmentIcon /> Add Pet
            </Card.Header>
            <Card.Body>
              <form
                encType='multipart/form-data'
                action='/api/addPet'
                method='POST'
              >
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
                  <Form.Control
                    name='type'
                    className='my-2'
                    as='select'
                    onChange={this.onInputChange}
                  >
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Fish</option>
                    <option>Bird</option>
                    <option>Horse</option>
                  </Form.Control>
                  {/* Get Animal's Attitude */}
                  <Form.Control
                    name='attitude'
                    className='my-2'
                    as='select'
                    onChange={this.onInputChange}
                  >
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
                    name='imgPath'
                    accept='image/*'
                    onChange={this.onImageSelected}
                  />
                  {/* Image Preview */}
                  <Image src={this.state.imagePreview} width={200} />
                  <br />
                  {/* Upload Button */}
                  <Button type='submit' className='px-5 mt-3' variant='primary'>
                    <CloudUploadIcon className='mx-2' /> Upload
                  </Button>
                </Form.Group>
              </form>
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
}

export default AddPet
