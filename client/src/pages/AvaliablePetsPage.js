import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import PetCard from '../components/PetCard'

/**
 * Page used for splash, it will have two buttons to
 * route user || shelter to espesific page
 */
class AvaliablePetsPage extends Component {
state= {
  pets: []
}
/**
 * gettingData()
 */
gettingData = () => {fetch('/api/findAll')
  .then(response => response.json())
  .then (data => this.setState({pets:data},()=>console.log(this.state)))
  }
  /**
   * componentDidMount()
   */
  componentDidMount () {
    this.gettingData()
  }
  /**
   *
   * Render
   *
   */
  renderPets = petsArray => {
    let _petsElements = petsArray.map(petInfo => {
      // Destructing object
      const {
        id,
        petName,
        type,
        attitude,
        imgPath,
        name='bob\'s place',
        phone='925-444-4332',
        address='144 AwesomePants Rd',
      
      } = petInfo
      console.log(petInfo)
      // each Pet available in the JSON will be
      // Added as <PetCard> element in _booksElements array
      return (
        <PetCard
          key={id}
          id={id}
          petName={petName}
          type={type}
          attitude={attitude}
          imgPath={imgPath}
          name= {name}
          address={address}
          phone={phone}

        />
      )
    })
    // Return Array of <PetCard> elements
    return _petsElements
  }  
  render () {
    return (
      <>
      <h1 className='text-center my-5'>Available Pets</h1>
        <Container className='my-2 p-2 container'>
          {this.renderPets(this.state.pets)}
        </Container>
      </>
    )
  }
}

export default AvaliablePetsPage
