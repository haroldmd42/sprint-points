import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid min-vh-100 d-flex align-items-stretch position-relative p-0">
        <div className="row w-100 m-0">
          {/* Columna izquierda: Título y descripción */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
            <h1 className="display-4 fw-bold">
              <span className="text-danger">Bienvenido a </span>
              <span className="text-warning">Sprint </span>
              <span className="text-success">Points</span>
            </h1>
            <p className="lead mt-3 text-dark">
              Esta aplicación te permite estimar Historias de Usuario (HU)
              dentro de un Sprint utilizando un sistema visual tipo semáforo
              para evaluar su complejidad.
            </p>
            <div className="traffic-lights-container">
              <div className="traffic-circle circle-red"></div>
              <div className="traffic-circle circle-yellow"></div>
              <div className="traffic-circle circle-green"></div>
            </div>
          </div>

          {/* Columna derecha: dos secciones de colores */}
          <div className="col-md-6 d-flex flex-column">
            {/* Sección Administrador */}
            <div className="flex-fill bg-success text-white d-flex flex-column justify-content-center align-items-center p-4">
              <h2 className="fw-bold mb-3">Administrador</h2>
              <p className="text-center mb-4 px-4">
                Crea y administra las Historias de Usuario, define los
                participantes del sprint y analiza los resultados de las
                estimaciones.
              </p>
              <button
                className="btn btn-light text-success fw-bold"
                onClick={() => navigate("/login")}
              >
                Ingresar como Administrador
              </button>
            </div>

            {/* Sección Estimador */}
            <div className="flex-fill bg-dark text-light d-flex flex-column justify-content-center align-items-center p-4">
              <h2 className="fw-bold mb-3">Estimador</h2>
              <p className="text-center mb-4 px-4">
                Participa en las sesiones de estimación, asigna niveles de
                esfuerzo a las HU y colabora en la planificación del sprint.
              </p>
              <button
                className="btn btn-warning text-warning fw-bold bg-light"
                onClick={() => navigate("/estimador")}
              >
                Ingresar como Estimador
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
