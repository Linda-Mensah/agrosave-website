import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes (like nav link click)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={isOpen ? "menu-open" : ""}>
      <div className="container">
        <div className="logo">
          <Link to="/">Agrosave</Link>
        </div>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
          {" "}
          <ul className={isOpen ? "active" : ""}>
            {" "}
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/solutions">Our Solution</Link>
            </li>
            <li>
              <Link to="/partners">Partner With Us</Link>
            </li>
            <li>
              <Link to="/news">News & Updates</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact" className="cta-button">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
