import React from 'react'
import Hexagon from '../assets/img/Hexagon.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <section className='upFoot'>
            <div className='santiago'>
                <div className='exagon'>
                    <img src={Hexagon} alt="" />
                </div>
                <div className='nombres'>
                    <p className='subHead'>Santiago.</p><p className='descrip'>vida y orden</p>
                </div>
               
            </div>
            <aside className='contactArea'>
                <p className='subHead'>Buzon de Sugerencias</p>
                <p className='subHead'>Atencion ciudadana: +52(81) 2285 0004</p>
                <nav>
                    <Link>f</Link>
                    <Link>t</Link>
                    <Link>y</Link>
                    <Link>i</Link>
                </nav>
                
            </aside>
        </section>
        <section className='lowFoot'>
            <p className='subHead'>2022 © Municipio de Santiago. <span className='descrip'> Todos los derechos reservados</span></p>
            <div className='terminos'>
                <p className='descrip'>Aviso de Privacidad</p>
                <p className='descrip'>Terminos y Condiciones</p>
                <p className='descrip'>Cookies</p>
                <p className='descrip'>Uso de datos</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer