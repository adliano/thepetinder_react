import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './style.css'

function PetCard (props) {
  return (
    <Card border="secondary" className='mx-auto my-1 bg-light'>
      <Card.Header as='h3' className='mx-auto bg-primary text-center text-light'>{props.petName}</Card.Header>
      <Card.Img variant='top' className='p-2 bg-light' src={props.imgPath} />
      <ListGroup className='p-2 bg-light' variant='flush'>
        <ListGroup.Item>Type: {props.type}</ListGroup.Item>
        <ListGroup.Item>Age: {props.age}</ListGroup.Item>
        <ListGroup.Item>Temperment: {props.attitude}</ListGroup.Item>
        <ListGroup.Item>Shelter: {props.name}</ListGroup.Item>
        <ListGroup.Item>Address: {props.address}</ListGroup.Item>
        <ListGroup.Item>City: {props.city}</ListGroup.Item>
        <ListGroup.Item>State: {props.state}</ListGroup.Item>
        <ListGroup.Item>Zip Code: {props.zipCode}</ListGroup.Item>
        <ListGroup.Item>Phone: {props.phone}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default PetCard
