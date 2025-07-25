import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function BackButton({ to, text = "Volver" }) {
  return (
    <div className="fw-bold m-3">
      <Link to={to} className="text-dark text-decoration-none">
        <i className="bi bi-arrow-left-circle-fill text-success"> {text}</i>
      </Link>
    </div>
  );
}

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
};
