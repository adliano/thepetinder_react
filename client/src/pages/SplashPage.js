import React, { Component } from 'react'
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// Use Application Components
import PetNavbar from '../components/PetNavBar'
import PetFooter from '../components/PetFooter'
import PetinderLogo from '../components/PetinderLogo'

class SplashPage extends Component {
    /**
     * onButtonClick()
     * Event listener used for buttons
     */
    onButtonClick = (event) => {
        //Place logic here later
        let _element = event.target
        
        console.log(_element)
        
    }
  /**
   * Render
   */
  render () {
    return (
      <>
        <PetNavbar />
        <PetinderLogo />
        <Container className='my-2 p-1 text-center'>
          <Row>
            <h1>
              Lorem cillum labore ex irure nostrud reprehenderit est sit
              incididunt aute anim ea voluptate.
            </h1>
          </Row>
          <Row className='p-3'>
            <p>
              Tempor esse aute voluptate consectetur voluptate. Ipsum magna
              reprehenderit ullamco qui laborum ex. Incididunt laborum non
              ullamco ex commodo pariatur. Nisi incididunt ea minim adipisicing
              sunt labore do sint adipisicing dolore dolor cupidatat nulla.
              Excepteur ea officia veniam qui et tempor ipsum Lorem ullamco
              labore duis. Cillum quis aliquip tempor in. Magna eiusmod esse
              minim mollit quis proident sit. Deserunt proident Lorem qui aute
              adipisicing consequat non elit. Mollit eiusmod commodo do magna
              aute Lorem fugiat ut irure Lorem consequat sunt magna ex. Dolore
              esse consectetur commodo voluptate ullamco non veniam minim cillum
              aliqua. Laboris amet tempor tempor occaecat laborum. Labore in
              magna amet nostrud velit laborum aliqua aliquip ipsum eiusmod
              ullamco laboris esse. Pariatur laboris ex deserunt veniam aliqua
              culpa ad labore aute. Lorem excepteur aliquip voluptate culpa
              officia amet tempor dolore ex in. Ullamco aliqua non excepteur
              minim velit. Veniam proident et aliqua cillum minim commodo anim
              aute. Qui consequat do elit sunt officia pariatur nulla. Ipsum
              esse Lorem anim nulla esse enim quis laborum adipisicing laborum.
              Aliquip ad anim labore Lorem excepteur elit aliqua ex adipisicing
              sit Lorem ad sunt. Veniam fugiat in qui ullamco ut aute non
              aliquip. Officia occaecat reprehenderit aliqua qui laborum magna
              veniam eiusmod non exercitation amet duis.
            </p>
          </Row>
          <Row className='my-2 p-3'>
              <Col>
              <Button className='w-25' variant='primary'>User</Button>
              </Col>
              <Col>
              <Button className='w-25' variant='primary'>Shelter</Button>
              </Col>
          </Row>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default SplashPage
