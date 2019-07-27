import React from 'react'
import './style.css'

function PetCard (props) {
  return (
    <div className='card cardDimensions col'>
      <img className='card-img-top imgSize ' src={props.imgPath} alt='' />
      <div className='card-body'>
        <h4 className='card-title'>My Name: {props.petName}</h4>
        <p className='card-text'>Type: {props.type}</p>
        <p className='card-text'>Temperment: {props.attitude}</p>
      </div>
    </div>
  )
}

export default PetCard
