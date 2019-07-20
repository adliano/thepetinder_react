import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



class Text extends Component {

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
  render(){
    return(
      
      
        <Container className='my-2 p-2 text-center'>
        <Row>
          <h1 className='p-2'>
          Animals and Universal Consciouness.
          </h1>
        </Row>
        <Row className='p-3'>
          <p>
          Our mission is simple: Make technology an asset for animal lovers.
          Our clients are people that love animals and are interested in contributing to reduce the number of animals in shelters.
          The greatest defense to our pet overpopulation crisis is a well-informed community.
          Make sure that your friends and family are aware of the pet overpopulation crisis and how their personal actions can help solve or contribute to the problem.
          </p>
        </Row>
        </Container>
    );
  }
}

export default Text;