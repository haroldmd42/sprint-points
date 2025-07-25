import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Home from './pages/Home';
import Stimator from './pages/stimator/Stimator';
import RegisterUser from './pages/registerUser/RegisterUser';
import AdminUser from './pages/adminUsers/AdminUser';
import AdminBoard from './pages/adminBoard/AdminBoard';
import CreateHistory from './pages/createHistory/CreateHistory';
import ViewHistories from './pages/viewHistories/ViewHistories';
import ViewAllHistories from './pages/viewAllHistories/ViewAllHistories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/estimador" element={<Stimator />} />
      <Route path="/registrarme" element={<RegisterUser />} />
      <Route path="/userRegister" element={<AdminUser />} />
      <Route path="/adminBoard" element={<AdminBoard />} />
      <Route path="/createHistory" element={<CreateHistory />} />
      <Route path="/viewHistories" element={<ViewHistories />} />
      <Route path="/viewAllHistories" element={<ViewAllHistories />} />
      {/* Puedes agregar más rutas según sea necesario */}
    </Routes>
  );
}

export default App;
