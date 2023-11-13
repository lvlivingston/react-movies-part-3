import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="NavText">Movies</Link>
      <Link to="/actors" className="NavText">Actors</Link>
    </nav>
  );
}