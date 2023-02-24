import React from 'react'
import { Link } from 'react-router-dom'

function bar() {
  return (
    <aside>
    <nav>
        <div>
        <Link to='GobiernoMunicipal' className='navLink'>Gobierno Municipal</Link>
        </div>
        <div>
        <Link to="Tramites-y-Servicios" className='navLink'>Tramites y Servicios</Link>
        </div>
        <div>
        <Link to="Noticias-y-Eventos" className='navLink'>Noticias y Eventos</Link>
        </div>
        <div>
        <Link to="DIF" className='navLink'>DIF</Link>
        </div>
        <div>
        <Link to="Turismo" className='navLink'>Turismo</Link>
        </div>
        <div>
        <Link to="Contacto" className='navLink'>Contacto</Link>
        </div>  
    </nav>
    <div className='search'>S</div>
    </aside>
    
  )
}

export default bar