import {Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/Home'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Aquí puedes agregar más rutas para otras páginas */}
      <Route path="/admin" element={<Login />} /> */
      {/* Ejemplo: <Route path="/estimador" element={<Estimador />} /> */}
    </Routes>
  )
}

export default App
