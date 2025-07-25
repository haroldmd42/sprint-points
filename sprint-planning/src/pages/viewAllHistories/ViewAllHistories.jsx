import Navbar from "../../componets/navBar/NavBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ViewAllHistories.css";
import BackButton from "../../componets/backButton/BackButton";

export function ViewAllHistories() {
  const [histories, setHistories] = useState([]);
  const [error, setError] = useState(null);
  const [openSprint, setOpenSprint] = useState(null); // para controlar qué dropdown está abierto
  const navigate = useNavigate();
  useEffect(() => {
    // Función para obtener todas las historias
    // y agruparlas por sprint

    const fetchHistories = async () => {
      try {
        const response = await fetch("http://localhost:5282/api/history", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Error al obtener todas las historias");
        }
        const data = await response.json();
        setHistories(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchHistories();
  }, []);

  const groupedHistories = histories.reduce((acc, history) => {
    const key = history.sprintName || "Sin nombre del sprint";
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(history);
    return acc;
  }, {});

  const toggleDropdown = (sprintName) => {
    setOpenSprint(openSprint === sprintName ? null : sprintName);
  };

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{ marginTop: "90px", paddingBottom: "50px" }}
      >
        <BackButton to="/adminBoard" text="Volver" />
        <h1 className="mb-4">Historial de estimaciones generadas</h1>
        <p className=" text-muted">
          Aquí podrás ver el historial de historias creadas agrupadas por
          sprint.
        </p>

        {error && <div className="alert alert-danger">{error}</div>}

        {histories.length > 0 ? (
          <div className="accordion" id="sprintAccordion">
            {Object.entries(groupedHistories).map(
              ([sprintName, sprintHistories]) => (
                <div className="card mb-3" key={sprintName}>
                  {/* HEADER */}
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <h5 className="mb-2">Sprint: {sprintName}</h5>
                      <p className="text-success mb-2 border border-success rounded bg-success text-light codigo-general">
                        Código: {sprintHistories[0]?.accessCode}
                      </p>
                    </div>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-success text-light "
                        onClick= {() =>
                          navigate( `/viewHistories?estimationId=${encodeURIComponent(sprintHistories[0].estimationId)}`)
                        }
                      >
                        Iniciar estimación
                      </button>
                      <button
                        className="text-success button-toggler"
                        onClick={() => toggleDropdown(sprintName)}
                      >
                        {openSprint === sprintName ? "Ocultar -" : "Mostrar +"}
                      </button>
                    </div>
                  </div>

                  {/* BODY */}
                  {openSprint === sprintName && (
                    <div className="card-body">
                      {sprintHistories.map((history) => (
                        <div
                          key={history.id}
                          className="border rounded p-3 mb-3"
                        >
                          <label className="form-label fw-bold">Título</label>
                          <p>{history.title}</p>
                          <label className="form-label fw-bold">
                            Descripción
                          </label>
                          <p>{history.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        ) : (
          <div className="alert alert-info">No hay historias registradas.</div>
        )}
      </div>
    </>
  );
}

export default ViewAllHistories;
