import React from 'react'
import { GoLocation as Location } from "react-icons/go";
import { BsTelephone as Phone } from "react-icons/bs";

function Directorio({contacto,lugar,telefonos}) {
  return (
    <div className='directorio'>
        <h5>{contacto}</h5>
        <section className='directionDates'>
            <p className='subHead name'><span><Location/> </span>{lugar.ubicacion}</p>
            <p className='subHead'>{lugar.direccion}</p>
        </section>
        <section className='phoneNumbers'>
           {telefonos.map(telefono=>(
            <p className='phone'
            key={telefono}
            ><span><Phone/> </span>{telefono}</p>
           ))}
        </section>
    </div>
  )
}

export default Directorio