import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();

  const locationCheck = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/signup" ||
      location.pathname === "/recover-password"
    )
      return "none";
    return "flex";
  };
  return (
    <nav className="navbar" style={{ display: `${locationCheck()}` }}>
      <div className="brand-name">
        <Link to="/">BHU Guide</Link>
      </div>

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
