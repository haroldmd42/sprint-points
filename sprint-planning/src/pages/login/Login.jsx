import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:5282/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/adminBoard");
      } else {
        const data = await response.json();
        setError(data.message = "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <>
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center position-relative">
        <div
          className="card text-dark p-4 shadow-lg"
          style={{ maxWidth: "400px", width: "100%", borderRadius: "1rem" }}
        >
          <h2 className="text-center mb-4 text-success">Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-dark">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control bg-transparent text-dark border-dark"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-dark">
                Contraseña
              </label>
              <div className="input-group">
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  className="form-control bg-transparent text-dark border-dark"
                  id="password"
                  required
                  maxLength={15}
                />
                <span
                  className="input-group-text bg-transparent text-success border-dark"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className={`bi ${
                      showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
                    }`}
                  ></i>
                </span>
              </div>
            </div>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <button type="submit" className="btn btn-success w-100">
              Ingresar
            </button>
            <div className="text-center mt-3">
              <p>
                No tengo cuenta,{" "}
                <Link to="/registrarme" className="text-dark">
                  registrarme
                </Link>
              </p>
            </div>
            <Link to="/" className="text-dark text-decoration-none">
              <i className="bi bi-arrow-left-circle-fill text-success">
                {" "}
                Volver
              </i>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
