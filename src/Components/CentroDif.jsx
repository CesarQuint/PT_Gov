import React from 'react'
import ActividadDIF from './ActividadDIF';

function CentroDif({ctrDIF}) {
    const {actividades}=ctrDIF
  return (
    <>
    <article className='centroDif'>
        <section className='centroDifImg'>        
        </section>
        <div className='centroDifContainer'>
            <section className='centroDifDescrip'>
            <h5>Yerbaniz</h5>
            <div className=''>
                <h5>Direccion</h5>
                <p className=''> descripcion de la direccion</p>
            </div>
            <section className='time_phone'>
                <p className='time'>Lun-Dom</p>
                <p className='phone'>01800</p>
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
    </article>
   
    </>
 
  )
}

export default CentroDif