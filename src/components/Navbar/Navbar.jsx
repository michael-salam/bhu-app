import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  // define state to store whether the mobile menu is open or not
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  // stop the navbar from displaying if we are on certain pages
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

  // logic to toggle the mobile menu open or close
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  // logic to force close the mobile menu
  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" style={{ display: `${locationCheck()}` }}>
      <div className="brand-name">
        <Link to="/">BHU Guide</Link>
      </div>

      <button
        className="mobile-menu-btn btn btn--pri"
        onClick={handleToggleMobileMenu}
      >
        Menu
      </button>

      <button
        className="close-menu-btn btn btn--sec"
        style={{ display: `${isMobileMenuOpen ? "block" : "none"}` }}
        onClick={handleToggleMobileMenu}
      >
        Close
      </button>

      <ul className={`links ${isMobileMenuOpen && "mobile"}`}>
        <li>
          <Link to="/blog" className="link" onClick={handleCloseMobileMenu}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/people" className="link" onClick={handleCloseMobileMenu}>
            People
          </Link>
        </li>
        <li>
          <Link to="/places" className="link" onClick={handleCloseMobileMenu}>
            Places
          </Link>
        </li>
        <li>
          <Link to="/login" className="link" onClick={handleCloseMobileMenu}>
            Log in
          </Link>
        </li>
        <li>
          <Link to="/signup" className="link" onClick={handleCloseMobileMenu}>
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
