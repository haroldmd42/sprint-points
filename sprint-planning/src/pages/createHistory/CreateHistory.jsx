import AddHistory from "../../componets/addHistory/AddHistory";
import Navbar from "../../componets/navBar/NavBar";
import { FaTasks } from "react-icons/fa";
import {useState} from "react";
import { FaPlus } from "react-icons/fa";
export function CreateHistory() {
const [histories, setHisories] = useState([{id: 0}]);
const addNewHistory = () => {
    const newId = Date.now();
    setHisories([...histories,{id: newId}]);
};

const deleteHistory = (id) => {
    setHisories(histories.filter(history => history.id !== id));
};
  
    return (
    <>
      <Navbar />

      <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-2 py-4">
        <div
          className="card shadow-lg p-5 border-0 w-100"
          style={{ maxWidth: "1200px", borderRadius: "1rem" }}
        >
          <h1 className="text-success mb-4">
            <FaTasks className="me-2" />
            Administrar estimaciones de Historias de Usuario
          </h1>

          <p className="text-secondary fs-6 mb-5">
            Gestiona las historias de usuario para tu sprint, define participantes y
            realiza un seguimiento claro de las estimaciones.
          </p>

          {/* Sección dividida en dos columnas */}
          <div className="row w-100">
            {/* Columna izquierda: Nombre del Sprint */}
            <div className="col-md-5 text-start mb-4">
              <label htmlFor="sprintName" className="form-label text-dark fw-bold">
                Nombre o número del Sprint
              </label>
              <input
                type="text"
                className="form-control bg-transparent text-dark border-dark"
                id="sprintName"
                placeholder="Ej: Sprint 5"
                required
              />
            </div>

            {/* Columna derecha: Formulario AddHistory */}
            <div className="col-md-7 text-start">
              <form>
                {histories.map((history) => (
                    <AddHistory key={history.id} id={history.id} onDelete={deleteHistory} />
                ))}
                <button onClick={addNewHistory} type="button" className="btn btn-outline-success mb-3 p-1">
                      <FaPlus/> Añadir Historia
                </button>
                <div className="d-grid mt-3">
                  <button type="submit" className="btn btn-success btn-lg">
                    Crear sesión de estimación
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateHistory;
