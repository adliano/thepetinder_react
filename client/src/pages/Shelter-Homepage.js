import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

/**
 * Page used for splash, it will have two buttons to 
 * route user || shelter to espesific page
 */
class ShelterHome extends Component {


  state = {
    user: null,
  }

  componentDidMount(){

  }
  // Logout if close window
  componentWillUnmount(){
    console.log('will unmount called');
    
  }
    /**
     * onButtonClick()
     * Event listener used for buttons
     */
    onButtonClick = (event) => {
        
        let _element = event.target
        
        if(_element.textContent === 'User'){
            console.log('send user to user home page')
        }
        else{
            console.log('send Shelter to shelter home page')
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
        <Container className='my-2 p-2 text-center'>
          <Row>
            <h1 className='p-2 row mt-3 mx-auto text-center mx-3'>
        Animals and Universal Consciouness
            </h1>
          </Row>
          <Row className='p-3'>
        <p className="px-1">
          Our mission is simple: Make technology an asset for animal lovers.
        <br />
          Our clients are people that love animals and are interested in contributing to reduce the number of animals in shelters.
          The greatest defense to our pet overpopulation crisis is a well-informed community.
          Make sure that your friends and family are aware of the pet overpopulation crisis and how their personal actions can help solve or contribute to the problem.
        <br />
        </p>
          </Row>
          <Row className='m-3 p-2'>
              <Col md>
              <Button className='w-25 m-2' variant='primary' onClick={this.onButtonClick}href='/AvaliablePetsPage'>Avaliable Pets</Button>
              </Col>
              <Col md>
              <Button className='w-25 m-2' variant='primary' onClick={this.onButtonClick}href='/AddPet'>Add Pet</Button>
              </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default ShelterHome
