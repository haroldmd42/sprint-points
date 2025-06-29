import {Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Aquí puedes agregar más rutas para otras páginas */}
      {/* Ejemplo: <Route path="/admin" element={<Admin />} /> */}
      {/* Ejemplo: <Route path="/estimador" element={<Estimador />} /> */}
    </Routes>
  )
}

export default App
