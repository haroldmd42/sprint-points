import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Stimator() {
  const [accessCode, setAccessCode] = useState("");
  const navigate = useNavigate();

  const handleJoinEstimation = async () => {
    if (!accessCode.trim()) {
      alert("Por favor ingresa un código válido");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5282/api/history/by-code/${accessCode}`);
      if (!response.ok) {
        throw new Error("No se encontró una estimación con ese código.");
      }

      const data = await response.json();

      if (data.length > 0) {
        const estimationId = data[0].estimationId;
        navigate(`/viewHistories?estimationId=${encodeURIComponent(estimationId)}`);
      } else {
        alert("No se encontró ninguna estimación con ese código.");
      }
    } catch (error) {
      console.error("Error al buscar la estimación:", error);
      alert("Error al buscar la estimación");
    }
  };

  return (
    <>
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center position-relative">
        <div
          className="card bg-dards text-dark p-4 shadow-lg"
          style={{ maxWidth: "500px", width: "100%", borderRadius: "1rem" }}
        >
          <Link to="/" className="text-dark text-decoration-none">
            <i className="bi bi-arrow-left-circle-fill text-warning"> Volver</i>
          </Link>
          <h2 className="text-center mb-4 text-warning">Estimador</h2>
          <p className="text-center mb-4">
            Participa en las sesiones de estimación, asigna niveles de esfuerzo
            a las HU y colabora en la planificación del sprint.
          </p>
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <input
              className="form-control bg-transparent text-dark border-dark me-3"
              placeholder="Ingresar código de participante"
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
            />
            <button
              className="btn btn-warning w-50 text-light"
              onClick={handleJoinEstimation}
            >
              Ingresar
            </button>
          </div>
          <div className="traffic-lights-container mt-4">
            <div className="traffic-circle circle-red"></div>
            <div className="traffic-circle circle-yellow"></div>
            <div className="traffic-circle circle-green"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stimator;
