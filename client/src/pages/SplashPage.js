import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

/**
 * Page used for Home, it will have two buttons to
 * route user || shelter to espesific page
 */
function SplashPage () {
  return (
    <div>
      <Container className='my-2 p-2 text-center'>
        <Row>
          <h1 className='p-2 mx-auto'>
          Animals and Universal Consciouness
          </h1>
        </Row>
        <Row className='p-3'>
          <p>
          Our mission is simple: Make technology an asset for animal lovers. <br />
         Our clients are people that love animals and are interested in contributing to reduce the number of animals in shelters.
         The greatest defense to our pet overpopulation crisis is a well-informed community.
         Make sure that your friends and family are aware of the pet overpopulation crisis and how their personal actions can help solve or contribute to the problem.
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
        </Row>
      </Container>
    </div>
  )
}

export default SplashPage
