import React from 'react'

function WelcomePanel({bgColor,borderColor,Img,title}) {
    //TODO:Mejorar la flexibilidad de la imagen de fondo
  return (
    <div className='welcomeContain'
      style={{backgroundColor:`${bgColor}`}}
    >
        <div className='welcome'>
            <section className='welcomeTitle'>
                <h2>{title}</h2>
            </section>
            <div className='hexImg' style={{backgroundImage:`url('${Img}')`,
              backgroundColor:`${borderColor}`}}></div>
        </div>
        
    </div>
    
  )
}

export default WelcomePanel