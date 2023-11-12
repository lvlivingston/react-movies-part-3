import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Movie Page</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actor</Link>
    </nav>
  );
}