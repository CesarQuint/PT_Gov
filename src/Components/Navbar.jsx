
import { Link ,useLocation } from 'react-router-dom'
import { ImSearch as Search } from "react-icons/im";

function bar() {
  const location =useLocation()
  return (
    <aside>
    <nav>
        <div className={`  ${location.pathname=='/GobiernoMunicipal'?'pageSelected':'pagenoSelect'}`}>
        <Link  to='GobiernoMunicipal' className={`  navLink`}>Gobierno Municipal</Link>
        </div>
        <div
        className={`  ${location.pathname=='/Tramites-y-Servicios'?'pageSelected':'pagenoSelect'}`}
        >
        <Link to="Tramites-y-Servicios" className='navLink'>Tramites y Servicios</Link>
        </div>
        <div
        className={`  ${location.pathname=='/Noticias-y-Eventos'?'pageSelected':'pagenoSelect'}`}
        >
        <Link to="Noticias-y-Eventos" className='navLink'>Noticias y Eventos</Link>
        </div>
        <div
        className={`  ${location.pathname=='/DIF'?'pageSelected':'pagenoSelect'}`}
      
        >
        <Link to="DIF" className='navLink'>DIF</Link>
        </div>
        <div
        className={`  ${location.pathname=='/Turismo'?'pageSelected':'pagenoSelect'}`}
        
        >
        <Link to="Turismo" className='navLink'>Turismo</Link>
        </div>
        <div
        className={`  ${location.pathname=='/Contacto'?'pageSelected':'pagenoSelect'}`}
        >
        <Link to="Contacto" className='navLink'>Contacto</Link>
        </div>  
    </nav>
    <div className='search'><Search/></div>
    </aside>
    
  )
}

export default bar