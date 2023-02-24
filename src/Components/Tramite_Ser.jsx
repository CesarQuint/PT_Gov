import React from 'react'
import Label from './Label'
import Hexagono from '../assets/img/Hexagon.png'

  const example={
    msg:'Default',
    type:'default'
  }

function Tramite_Ser({description}) {
    const {name,servicio}=description
  return (
    <div className='tramiteSec'>
        <div className='Tramite_text'>
            <section className='Icono'>
                <img src={Hexagono} alt="" />
            </section>  
            <section className='tramiteName'>
                <h4>{name}</h4>
                <p className='descrip'>{servicio}</p>
            </section>  
        </div>
        <section className='tags'>
            <Label label={example}/>
            <Label label={example}/>
        </section>  
    </div>
  )
}

export default Tramite_Ser