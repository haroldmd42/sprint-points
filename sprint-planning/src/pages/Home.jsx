import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="traffic-background"></div>

      {/* Contenedor general centrado */}
      <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
        {/* Título y descripción */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">
            <span className="text-danger">Bienvenido a </span>
            <span className="text-warning">Sprint </span>
            <span className="text-success">Points!</span>
          </h1>
          <p className="lead text-dark mb-4 bold">
            Esta aplicación te permite estimar Historias de Usuario (HU) dentro
            de un Sprint utilizando un sistema visual tipo semáforo para evaluar
            su complejidad.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="container ">
          
          <div className="row justify-content-center g-4">
            
            {/* Card Administrador */}
            <div className=" col-12 col-md-6 col-lg-5 d-flex" >
              
              <div className="card border-success h-100 w-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-success">Administrador</h5>
                  <p className="card-text flex-grow-1">
                    Crea y administra las Historias de Usuario, define los
                    participantes del sprint y analiza los resultados de las
                    estimaciones.
                  </p>
                  <button
                    className="btn btn-success w-100 mt-auto"
                    onClick={() => navigate("/admin")}
                  >
                    Ingresar como Administrador
                  </button>
                </div>
              </div>
            </div>

            {/* Card Estimador */}
            <div className="col-12 col-md-6 col-lg-5 d-flex">
              <div className="card border-warning h-100 w-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning">Estimador</h5>
                  <p className="card-text flex-grow-1">
                    Participa en las sesiones de estimación, asigna niveles de
                    esfuerzo a las HU y colabora en la planificación del sprint.
                  </p>
                  <button
                    className="btn btn-warning text-light w-100 mt-auto"
                    onClick={() => navigate("/estimador")}
                  >
                    Ingresar como Estimador
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
