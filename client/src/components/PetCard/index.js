import React from 'react'
import './style.css'

function PetCard (props) {
  return (
    <div className='card cardDimensions col p-0 '>
      <div className='card-header w-100 text-center'>
        <h4 className='card-title w-100'>My Name: {props.petName}</h4>
      </div>
      <img className='card-img-top imgSize ' src={props.imgPath} alt='' />
      <div className='card-body'>
        <p className='card-text text-center'>Type: {props.type}</p>
        <p className='card-text text-center'>Temperment: {props.attitude}</p>
        <p className='card-text text-center'>Shelter: {props.name}</p>
        <p className='card-text text-center'>Shelter test: {props.shelterName}</p>
        <p className='card-text text-center'>Address: {props.adress}</p>
        <p className='card-text text-center'>Address Test: {props.addressTest}</p>
        <p className='card-text text-center'>Phone: {props.phone}</p>

        <p className='card-text text-center'>Phone Test: {props.shelterPhone}</p>
      </div>
    </div>
  )
}

export default PetCard
