import React from 'react'
import ActividadDIF from './ActividadDIF';

function CentroDif({ctrDIF}) {
    const {actividades}=ctrDIF
    console.log(actividades);
  return (
    <div className='centroDifContainer'>
        <section className='centroDifImg'>
            
        </section>
        <section className='centroDifDescrip'>
        <h5>Yerbaniz</h5>
        <div className=''>
            <h5>Direccion</h5>
            <p className=''> descripcion de la direccion</p>
        </div>
        <section className='time_phone'>
            <p>Hora</p>
            <p>Direccion</p>
        </section>
        <div>
            <h5>Actividades</h5>
            <div className='gridDescrip'>
                {actividades.map(actividad=>(
                   <ActividadDIF 
                    key={actividad}
                    actividad={actividad}
                   />
                ))}
            </div>
        </div>
        </section>
       
    </div>
  )
}

export default CentroDif