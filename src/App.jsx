import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Layout from './Layout/Layout'
import Index from './Pages/Index'
import DIF from './Pages/DIF'
import Turismo from './Pages/Turismo'
import Tramites from './Pages/Tramites'
import Noticias from './Pages/Noticias'
import Contacto from './Pages/Contacto'
import GobiernoCabildo from './Pages/GobiernoCabildo'
import GobiernoDirectorio from './Pages/GobiernoDirectorio'
import GobiernoComisiones from './Pages/GobiernoComisiones'
import GobiernoSecretarias from './Pages/GobiernoSecretarias'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index/>}/>
          {/*Rutas de Gobierno Municipal*/}
          <Route path='/GobiernoMunicipal/Cabildo' element={<GobiernoCabildo/>}/>
          <Route path='/GobiernoMunicipal/Secretarias' element={<GobiernoSecretarias/>}/>
          <Route path='/GobiernoMunicipal/Comisiones' element={<GobiernoComisiones/>}/>
          <Route path='/GobiernoMunicipal/Directorio' element={<GobiernoDirectorio/>}/>
          {/*Rutas de Tramites */}
          <Route path='/Tramites-y-Servicios' element={<Tramites/>}/>
          <Route path='/Noticias-y-Eventos' element={<Noticias/>}/>
          <Route path='/DIF' element={<DIF/>}/>
          <Route path='/Turismo' element={<Turismo/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
