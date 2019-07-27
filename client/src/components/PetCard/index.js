import React from 'react'
import './style.css'

function PetCard (props) {
  return (
    <div className='card'>
      <img className='card-img-top imgSize' src={props.imgPath} alt='' />
      <div className='card-body'>
        <h4 className='card-title'>My Name: {props.petName}</h4>
        <p className='card-text'>Type: {props.type}</p>
        <p className='card-text'>Temperment: {props.attitude}</p>
        <p className='card-text'>Test Img path: {props.imgPath}</p>
      </div>
    </div>
  )
}

export default PetCard
