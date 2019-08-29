import React, { Component } from 'react'
import { Container, Button, Form, Card, Image } from 'react-bootstrap'
import {
  CloudUpload as CloudUploadIcon,
  Assignment as AssignmentIcon
} from '@material-ui/icons/'

class AddPet extends Component {
  state = {
    shelter: { id: '' },
    image: null,
    imagePreview: '',
    petName: '',
    age: '',
    type: '',
    attitude: '',
    imgPath: '',
    attitudeDisabled: false,
    typeDisabled: false,
  }
  /**
   * componentDidMount()
   * Get the sehlter id to save with the pet info
   */
  componentDidMount () {
    fetch('/auth', { method: 'GET' })
      .then(response => response.json())
      .then(results => this.setState({ shelter: results }))
      .catch(err => console.log(err))
  }
  /**
   * onImageSelected(event)
   */
  onImageSelected = event => {
    const { files } = event.target
    if (files.length > 0) {
      this.setState({
        imagePreview: URL.createObjectURL(files[0])
      })
    }
    else{
      this.setState({
        imagePreview: '',
      })
    }
  }
  /**
   * onInputChange(event)
   */
  onInputChange = event => {
    const { name, value } = event.target
    // Void user to select attitude or type after selection was made
    if(name === 'attitude'){
      this.setState({ [name]: value, attitudeDisabled: true })
    }
    else if(name === 'type'){
      this.setState({ [name]: value, typeDisabled: true })
    }
    else{
      this.setState({ [name]: value })
    }
  }
  /**
   * isEnable()
   * Used to keep button disable until all fields are completed
   */
  isEnable = () => {
    const { petName, age, type, attitude, imagePreview } = this.state
    return (
      petName.length > 0 &&
      age.length > 0 &&
      type.length > 0 &&
      attitude.length > 0 &&
      imagePreview.length > 0
    )
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
                <Form.Group controlId='exampleForm.ControlInput1'>
                  <Form.Control
                    name='shelter_id'
                    value={this.state.shelter.id}
                    style={{ display: 'none' }}
                    onChange={() => {}}
                  />
                  <Form.Control
                    name='host'
                    value={window.location.origin}
                    style={{ display: 'none' }}
                    onChange={() => {}}
                  />
                  {/* Get Animal's name */}
                  <Form.Control
                    className='my-2'
                    type='text'
                    placeholder='Name'
                    name='petName'
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
                    <option disabled={this.state.typeDisabled}>Type..</option>
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
                    placeholder="select"
                  >
                    <option disabled={this.state.attitudeDisabled}>Attitude..</option>
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
                  <Button
                    type='submit'
                    className='px-5 mt-3'
                    variant='primary'
                    disabled={!this.isEnable()}
                  >
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
