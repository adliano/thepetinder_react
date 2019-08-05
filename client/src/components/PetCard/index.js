import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './style.css'

function PetCard (props) {
  return (
    <Card border="secondary" className='mx-auto my-1 bg-light'>
      <Card.Header as='h3' className='mx-auto bg-light'>{props.petName}</Card.Header>
      <Card.Img variant='top' src={props.imgPath} />
      <ListGroup variant='flush'>
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

/// /////////////////////////////// OLD CODE ////////////////////////////////////////
// <div className='card cardDimensions col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 p-1 m-2 my-1'>
//   <div className='card-header w-100 text-center'>
//     <h4 className='card-title w-100'>My Name: {props.petName}</h4>
//   </div>
//   <img className='card-img-top imgSize mt-2' src={props.imgPath} alt='' />
//     <ul class="list-group list-group-flush p-0">
//       <li  class="list-group-item">
//     <p className='card-text text-center'>Type: {props.type}</p>
//       </li>
//       <li  class="list-group-item">
//     <p className='card-text text-center'>Temperment: {props.attitude}</p>
//     </li>
//     <li  class="list-group-item">
//     <p className='card-text text-center'>Shelter: {props.name}</p>
//     </li>
//     <li  class="list-group-item">
//     <p className='card-text text-center'>Address: {props.address}</p>
//     </li>
//     <li  class="list-group-item">
//     <p className='card-text text-center'>City: {props.city}</p>
//     </li>
//     <li  class="list-group-item">
//     <p className='card-text text-center'>State: {props.state}</p>
//     </li>
//     <li  class="list-group-item">
//     <p className='card-text text-center'>Zip Code: {props.zipCode}</p>
//     </li>
//     <li  class="list-group-item">
//     <p className='card-text text-center'>Phone: {props.phone}</p>
//     </li>
//     </ul>
// </div>
