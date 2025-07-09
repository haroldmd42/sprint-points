import { FaTrash } from "react-icons/fa";

export function AddHistory({ id, onDelete }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="title" className="form-label text-dark fw-bold">
          Título de la Historia
        </label>
        <input
          type="text"
          className="form-control bg-transparent text-dark border-dark"
          id="title"
          placeholder="Ej: Como usuario quiero poder filtrar resultados"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="form-label text-dark fw-bold">
          Descripción
        </label>
        <textarea
          className="form-control bg-transparent text-dark border-dark"
          id="description"
          rows="4"
          placeholder="Describe los objetivos, criterios de aceptación, etc."
          required
        ></textarea>
        
      </div>
      <button
          className="btn btn-danger btn-sm position-relative mb-3 p-1" style={{ marginRight: "10px" }}
          onClick={() => onDelete(id)}
        >
          <FaTrash />Eliminar
        </button>
    </>
  );
}

export default AddHistory;
