import React from 'react'
import Hexagon from '../assets/img/Hexagon.png'

function CarouselCard({card}) {
  const {name}=card
  return (
    <div className='carouselCard'>
       <img src={Hexagon} alt="" /> 
       <h5>{name}</h5>
       <p className='descrip'>DIF</p>
    </div>
  )
}

export default CarouselCard