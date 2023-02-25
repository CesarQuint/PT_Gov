import React from 'react'
import Cat from '../assets/img/Cat.jpg'

function WelcomePanel() {
  return (
    <div className='welcome'>
        <section className='welcomeTitle'>
            <h2>Desarrollo Integral de La Familia</h2>
        </section>
        <img className='welcomeImage' src={Cat} alt="" />
    </div>
  )
}

export default WelcomePanel