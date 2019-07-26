import React, { Component } from 'react'
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
/*import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
*/
// Use Application Components
import PetNavbar from '../components/PetNavBar'
import PetFooter from '../components/PetFooter'
import PetinderLogo from '../components/PetinderLogo'
import PetCard from '../components/PetCard'


/**
 * Page used for splash, it will have two buttons to
 * route user || shelter to espesific page
 */
class AvaliablePetsPage extends Component {
state= {
  pets: []
}

gettingData = () => {fetch('/api/findAll')
  .then(response => response.json())
  .then (data => this.setState({pets:data},()=>console.log(this.state)))
  /*.then(function (data) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].petName)
    }
  })*/}  
  componentDidMount () {
    this.gettingData()
  }
  /**
     * onButtonClick()
     * Event listener used for buttons
     */
  /** *onButtonClick = (event) => {

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
    */
  /**
   *
   * Render
   *
   */
  render () {
    /*this.gettingData()
    *this.componentDidMount()
    */
    return (
      <>
        <PetNavbar />
        <PetinderLogo />
        <Container className='my-2 p-2 text-center'>
          <PetCard />
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default AvaliablePetsPage
