import NavBar from "../../componets/navBar/NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaTasks, FaChartBar } from "react-icons/fa";
import "./AdminBoard.css"; // Asegúrate de tener este archivo CSS para estilos adicionales

export function AdminBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      console.log("Usuario autenticado:", user);
    }
  }, []);

  return (
    <>
      <NavBar />

      <div
        className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3 p-5"
      
      >
        <div
          className="card shadow-lg p-5 border-0"
          style={{ maxWidth: "1000px", borderRadius: "1rem" }}
        >
          <h1 className="text-success mb-3">
            Bienvenido a <strong>Sprint Points Admin</strong>
          </h1>
          <p className="text-secondary fs-5 mb-4">
            Administra tu equipo ágil de forma eficiente. Con Sprint Points
            Admin podrás:
          </p>

          <div className="row g-4 mb-4">
            <div className="col-md-4 d-flex flex-column align-items-center">
              <FaUsers size={50} className="text-success mb-2" />
              <h5 className="fw-bold">Gestión de Usuarios</h5>
              <p className="text-muted small">
                Administra fácilmente tus equipos de trabajo.
              </p>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <FaTasks size={50} className="text-warning mb-2" />
              <h5 className="fw-bold">Tareas y Sprints</h5>
              <p className="text-muted small">
                Organiza historias de usuario por prioridad.
              </p>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <FaChartBar size={50} className="text-info mb-2" />
              <h5 className="fw-bold">Estimaciones</h5>
              <p className="text-muted small">
                Realiza estimaciones precisas para calcular el esfuerzo
                requerido en cada historia durante el sprint.
              </p>
            </div>
          </div>

          <button className="btn btn-success btn-lg" onClick={() => navigate("/createHistory")}>Comenzar</button>
        </div>
      </div>
    </>
  );
}

export default AdminBoard;
