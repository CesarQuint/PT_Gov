import React from 'react'
import Hexagon from '../../assets/img/Hexagon.png'

function Comisiones_Card({data}) {
  const {comision,presidente,secretario,vocal}=data
  return (
    <div className='card'>
      <section className='comisionesUpCard'>
        <img src={Hexagon} alt="" />
        <h5>{comision}</h5>
      </section>
      <section className='comisionesLowCard' >
        <div>
          <h5>Presidente</h5>
          <p>{presidente}</p>
        </div>
        <div>
          <h5>Secretario</h5>
          <p>{secretario}</p>
        </div>
        <div>
        <h5>Vocal</h5>
          <p>{vocal}</p>
        </div>
      </section>
    </div>
  )
}

export default Comisiones_Card