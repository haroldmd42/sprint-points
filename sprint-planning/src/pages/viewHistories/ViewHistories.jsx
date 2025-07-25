import Navbar from "../../componets/navBar/NavBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BackButton from "../../componets/backButton/BackButton";
import "./ViewHistories.css";

export function ViewHistories() {
  const [histories, setHistories] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  //const sprintNameParam = queryParams.get("sprintName");
  const estimationIdParam = queryParams.get("estimationId");
  const filteredHistories = histories.filter(
    (history) => history.estimationId?.toLowerCase() === estimationIdParam?.toLowerCase()
  );
  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const response = await fetch("http://localhost:5282/api/history", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener las historias");
        }

        const data = await response.json();
        setHistories(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchHistories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="" style={{ paddingTop: "40px" }}>
          <BackButton to="/createHistory" text="Volver" />
        <h1 className=" mb-4">Historias para la estimación</h1>
        <p className=" text-muted">
          Aquí podrás ver las historias creadas, podras administrarlas y asi poder genrar una sesón de estimación con tu equipo de trabajo.
        </p>
        {filteredHistories.length > 0 && (
          <div className="mt-0">
            <p className="text-success mb-3 border border-success rounded bg-success text-light codigo-general">
              Código de estimación: <span className="text-light">{filteredHistories[0].accessCode}</span>
            </p>
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}

        {filteredHistories.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {filteredHistories
              .map((history) => (
                <div
                  key={history.id}
                  className="card mb-4 shadow-lg p-3"
                  style={{ width: "300px" }}
                >
                  <label className="fw-bold">Nombre de la HU:</label>
                  <p>{history.title}</p>
                  <label className="fw-bold">Descripción:</label>
                  <p>{history.description}</p>
                  <label className="fw-bold">Sprint:</label>
                  <p>{history.sprintName || "No especificado"}</p>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-center text-muted">
            No hay historias registradas.
          </p>
        )}
        
      </div>
        </div>
        
        
    </>
  );
}

export default ViewHistories;
