import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
      {/* Título y descripción */}
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex justify-center items-center gap-2">
          Bienvenido a Sprint Planning <span>🚦</span>
        </h1>
        <p className="text-lg text-gray-600">
          Esta aplicación te permite estimar Historias de Usuario (HU) dentro de un Sprint
          utilizando un sistema visual tipo semáforo para evaluar su complejidad.
        </p>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="flex flex-row gap-8 flex-nowrap justify-center w-full max-w-6xl">
        {/* Card Administrador */}
        <div className="bg-admin shadow-md rounded-xl p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Administrador</h2>
          <p className="text-gray-600 mb-4">
            Crea y administra las Historias de Usuario, define los participantes del sprint y analiza los resultados de las estimaciones.
          </p>
          <button
            onClick={() => navigate("/admin")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full"
          >
            Ingresar como Administrador
          </button>
        </div>

        {/* Card Estimador */}
        <div className="bg-estimator shadow-md rounded-xl mb-4  w-full ">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Estimador</h2>
          <p className="text-gray-600 mb-4">
            Participa en las sesiones de estimación, asigna niveles de esfuerzo a las HU y colabora en la planificación del sprint.
          </p>
          <button
            onClick={() => navigate("/estimador")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full"
          >
            Ingresar como Estimador
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
