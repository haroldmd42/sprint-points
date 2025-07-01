export function Login() {
  return (
    <>
      <div className="traffic-background"></div>

      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center position-relative">
        <div
          className="card text-dark p-4 shadow-lg"
          style={{ maxWidth: "400px", width: "100%", borderRadius: "1rem" }}
        >
          <h2 className="text-center mb-4">Iniciar sesión</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-dark">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control bg-transparent text-dark border-dark"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-dark">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control bg-transparent text-dark border-dark"
                id="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Ingresar
            </button>
            <div className="text-center mt-3">
                <p>No tengo cuenta, <a href="/registrarme" className="text-dark">
                 registrarme
              </a></p> 
            </div>
            <div className="text-center mt-3">
                 <a href="/" className="text-dark">
                    Volver al inicio
              </a> 
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
