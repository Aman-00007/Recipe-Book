import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🍽️ Recipe Book</h1>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/recipes">Recipes</Link>
        </li>

        <li>
          <Link to="/popular">Popular</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;