import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">BHU Guide</Link>

      <ul className="links">
        <li>
          <Link to="/blog" className="link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/people" className="link">
            People
          </Link>
        </li>
        <li>
          <Link to="/places" className="link">
            Places
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Log in
          </Link>
        </li>
        <li>
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
