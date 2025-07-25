import AddHistory from "../../componets/addHistory/AddHistory";
import Navbar from "../../componets/navBar/NavBar";
import { FaTasks } from "react-icons/fa";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BackButton from "../../componets/backButton/BackButton";

export function CreateHistory() {
  const [histories, setHistories] = useState([
    { id: Date.now(), title: "", description: "" },
  ]);

  const navigate = useNavigate();

  const addNewHistory = () => {
    const newId = Date.now();
    setHistories([...histories, { id: newId, title: "", description: "" }]);
  };

  const handleHistoryChange = (id, field, value) => {
    setHistories((prev) =>
      prev.map((h) => (h.id === id ? { ...h, [field]: value } : h))
    );
  };
  const [sprintName, setSprintName] = useState("");

  const deleteHistory = (id) => {
    setHistories(histories.filter((history) => history.id !== id));
  };
  const estimationId = crypto.randomUUID();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: "ba215681-e8af-4ff1-a717-4755236678bf",
      sprintName,
      estimationId,
      items: histories.map(({ title, description }) => ({
        title,
        description,
        date: new Date().toISOString(),
      })),
    };
    try {
      const response = await fetch("http://localhost:5282/api/history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json();
        alert("Historias creadas correctamente");
        setSprintName("");
        setHistories([{ id: Date.now(), title: "", description: "" }]);
        navigate(
          `/viewHistories?estimationId=${encodeURIComponent(data.estimationId)}`
        );
      } else {
        alert("Error al crear las historias");
      }
    } catch (error) {
      console.error("Error al crear las historias:", error);
      alert("Error al crear las historias");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-justify align-items-center text-justify px-2 py-4">
        <div
          className="card shadow-lg p-5 border-0 w-100"
          style={{ maxWidth: "1200px", borderRadius: "1rem" }}
        >
          <BackButton to="/adminBoard" text="Volver" />
          <h1 className="text-success mb-4">
            Administrar estimaciones de Historias de Usuario
          </h1>

          <p className="text-secondary fs-6 mb-5">
            Gestiona las historias de usuario para tu sprint, define
            participantes y realiza un seguimiento claro de las estimaciones.
          </p>

          {/* Sección dividida en dos columnas */}
          <div className="row w-100">
            {/* Columna izquierda: Nombre del Sprint */}
            <div className="col-md-5 text-start mb-4">
              <label
                htmlFor="sprintName"
                className="form-label text-dark fw-bold"
              >
                Nombre o número del Sprint
              </label>
              <input
                type="text"
                className="form-control bg-transparent text-dark border-dark"
                id="sprintName"
                value={sprintName}
                onChange={(e) => setSprintName(e.target.value)}
                placeholder="Ej: Sprint 5"
                required
              />
            </div>

            {/* Columna derecha: Formulario AddHistory */}
            <div className="col-md-7 text-start">
              <form onSubmit={handleSubmit}>
                {histories.map((history) => (
                  <AddHistory
                    key={history.id}
                    id={history.id}
                    onDelete={deleteHistory}
                    onChange={handleHistoryChange}
                  />
                ))}
                <button
                  onClick={addNewHistory}
                  type="button"
                  className="btn btn-outline-success mb-3 p-1"
                >
                  <FaPlus /> Añadir Historia
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
