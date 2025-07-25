import { FaTrash } from "react-icons/fa";

export function AddHistory({ id, onDelete, onChange }) {
  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    onChange(id, name, value);
  }
  return (
    <>
      <div className="mb-3">
        <label htmlFor={`title-${id}`} className="form-label text-dark fw-bold">
          Título de la Historia
        </label>
        <input
          type="text"
          className="form-control bg-transparent text-dark border-dark"
          id={`title-${id}`}
          name="title"
          placeholder="Ej: Como usuario quiero poder filtrar resultados"
          required
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor={`description-${id}`} className="form-label text-dark fw-bold">
          Descripción
        </label>
        <textarea
          className="form-control bg-transparent text-dark border-dark"
          id={`description-${id}`}
          name="description"
          rows="4"
          placeholder="Describe los objetivos, criterios de aceptación, etc."
          required
          onChange={handleInputChange}
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
