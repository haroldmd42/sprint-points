import { useState } from "react";
import { Link } from "react-router-dom";

export function RegisterUser() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    imageData: null, // imagen como archivo
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, imageData: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userId", crypto.randomUUID());
    formData.append("name", form.name);
    formData.append("lastName", form.lastName);
    formData.append("phone", form.phone);
    formData.append("email", form.email);
    formData.append("password", form.password);

    if (form.imageData) {
      formData.append("imageData", form.imageData);
    }

    try {
      const response = await fetch("http://localhost:5282/api/User/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Usuario registrado con éxito");
        setForm({
          name: "",
          lastName: "",
          phone: "",
          email: "",
          password: "",
          imageData: null,
        });
      } else {
        alert("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error al conectar con el servidor");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center position-relative">
      <div
        className="card text-dark p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%", borderRadius: "1rem" }}
      >
        <h2 className="text-center mb-4 text-success">Registro de usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-dark">Nombres</label>
            <input
              type="text"
              className="form-control bg-transparent text-dark border-dark"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              maxLength={150}
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Apellidos</label>
            <input
              type="text"
              className="form-control bg-transparent text-dark border-dark"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              maxLength={150}
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Teléfono</label>
            <input
              type="text"
              className="form-control bg-transparent text-dark border-dark"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              maxLength={15}
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Correo electrónico</label>
            <input
              type="email"
              className="form-control bg-transparent text-dark border-dark"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={150}
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">
              Imagen de perfil (opcional)
            </label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Contraseña</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control bg-transparent text-dark border-dark"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                maxLength={15}
              />
              <span
                className="input-group-text bg-transparent border-dark"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                ></i>
              </span>
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Registrarme
          </button>

          <div className="text-center mt-3">
            <p>
              Ya tengo una cuenta,{" "}
              <Link to="/login" className="text-dark">
                iniciar sesión
              </Link>
            </p>
            <Link to="/" className="text-dark text-decoration-none">
              <i className="bi bi-arrow-left-circle-fill text-success">
                {" "}
                Volver
              </i>
            </Link>
            <Link to="/userRegister" className="text-dark d-block">
              Ver usuarios registrados
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
