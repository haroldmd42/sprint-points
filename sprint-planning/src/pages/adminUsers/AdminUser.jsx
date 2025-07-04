import { useState, useEffect } from "react";

export function AdminUser() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5282/api/User", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {" "}
      <div className=" fw-bold m-3">
        <a href="/registrarme" className="text-dark">
          <i className="bi bi-arrow-left-circle-fill text-success"></i> Volver
        </a>
      </div>
      <div className="container py-5">
        <h2 className="text-center mb-4 text-success">
          Administración de Usuarios
        </h2>
        {error && <div className="alert alert-danger">{error}</div>}

        {users.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-justify gap-5 ">
            {users.map((user) => (
              <div
                key={user.userId}
                className="mb-4 pb-3 bg-light border border-dark rounded p-3"
                style={{ width: "500px",height: "300px" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  {/* Datos del usuario */}
                  <div
                    className="d-flex flex-column"
                    style={{ width: "600px", height: "100%" }}
                  >
                    <label className="form-label text-dark fw-bold">
                      Nombre
                    </label>
                    <p>{user.name}</p>

                    <label className="form-label text-dark fw-bold p-0">
                      Apellidos
                    </label>
                    <p>{user.lastName}</p>

                    <label className="form-label text-dark fw-bold">
                      Correo electrónico
                    </label>
                    <p>{user.email}</p>

                    <label className="form-label text-dark fw-bold">
                      Teléfono
                    </label>
                    <p>{user.phone}</p>
                  </div>

                  {/* Imagen a la derecha */}
                  <div className="ms-4">
                    <img
                      src={`data:image/png;base64,${user.imageData}`}
                      alt="usuario"
                      className="img-fluid"
                      width="80%"
                      height="80%"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-info">No hay usuarios registrados</div>
        )}
      </div>
    </>
  );
}

export default AdminUser;
