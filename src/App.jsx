import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Index from './pages/Index'
import Layout from './Layout/Layout'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
