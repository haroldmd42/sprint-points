export function Stimator() {
  return (
    <>
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center position-relative">
        
        <div
          className="card  bg-dards text-dark p-4 shadow-lg "
          style={{ maxWidth: "500px", width: "100%", borderRadius: "1rem" }}
        >
          <h2 className="text-center mb-4 text-warning">Estimador</h2>
          <p className="text-center mb-4">
            Participa en las sesiones de estimación, asigna niveles de esfuerzo
            a las HU y colabora en la planificación del sprint.
          </p>
          <div className="col-md-12 d-flex justify-content-center align-items-center ">
            <input
              className="form-control bg-transparent text-dark border-dark me-3 "
              placeholder="Ingresar codigo de participante xxxxxxx"
              type="text"
            ></input>
            <button className="btn btn-warning w-50 text-light">Ingresar</button>
          </div>
          <div className="traffic-lights-container">
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
