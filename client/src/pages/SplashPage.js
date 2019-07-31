import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

/**
 * Page used for Home, it will have two buttons to
 * route user || shelter to espesific page
 */
function SplashPage (props) {
  return (
    <div>
      <Container className='my-2 p-2 text-center'>
        <Row>
          <h1 className='p-2'>
            Lorem cillum labore ex irure nostrud reprehenderit est sit
            incididunt aute anim ea voluptate.
          </h1>
        </Row>
        <Row className='p-3'>
          <p>
            Tempor esse aute voluptate consectetur voluptate. Ipsum magna
            reprehenderit ullamco qui laborum ex. Incididunt laborum non ullamco
            ex commodo pariatur. Nisi incididunt ea minim adipisicing sunt
            labore do sint adipisicing dolore dolor cupidatat nulla. Excepteur
            ea officia veniam qui et tempor ipsum Lorem ullamco labore duis.
            Cillum quis aliquip tempor in. Magna eiusmod esse minim mollit quis
            proident sit. Deserunt proident Lorem qui aute adipisicing consequat
            non elit. Mollit eiusmod commodo do magna aute Lorem fugiat ut irure
            Lorem consequat sunt magna ex. Dolore esse consectetur commodo
            voluptate ullamco non veniam minim cillum aliqua.
          </p>
        </Row>
        <Row className='m-3 p-2'>
          <Col md>
            <Link to='/AvaliablePetsPage'>
              <Button
                className='w-25 m-2'
                variant='primary'
              >
                Avaliable Pets
              </Button>
            </Link>
          </Col>
          {/* <Col md> */}
            {/* <Button className='w-25 m-2' variant='primary' href='/ShelterLogin'>
              Shelter
            </Button> */}
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default SplashPage
