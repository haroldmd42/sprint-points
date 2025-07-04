import {Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/Home'
import Stimator from './pages/stimator/Stimator'
import RegisterUser from './pages/registerUser/RegisterUser'
import AdminUser from './pages/adminUsers/AdminUser'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Aquí puedes agregar más rutas para otras páginas */}
      <Route path="/login" element={<Login />} /> */
      <Route path="/estimador" element={<Stimator />} />
      <Route path="/registrarme" element={<RegisterUser />} />
      <Route path="/userRegister" element={<AdminUser />} />
      {/* Ruta para la administración de usuarios */}
    </Routes>
  )
}

export default App
