import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Layout from './Layout/Layout'
import Index from './Pages/Index'
import DIF from './Pages/DIF'
import Turismo from './Pages/Turismo'
import Tramites from './Pages/Tramites'
import Noticias from './Pages/Noticias'
import Contacto from './Pages/Contacto'
import GobiernoCabildo from './Pages/GobiernoCabildo'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index/>}/>
          {/*Rutas de Gobierno Municipal*/}
          <Route path='/GobiernoMunicipal/Cabildo' element={<GobiernoCabildo/>}/>
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
