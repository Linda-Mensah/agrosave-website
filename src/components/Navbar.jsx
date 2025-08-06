import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={isOpen ? "menu-open" : ""}>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img
              src="/images/agrosave-logo-transparent.png"
              alt="Agrosave Logo"
              className="w-35 h-15 object-cover"
            />
          </NavLink>
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
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/solutions"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Our Solution
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partners"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Partner With Us
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>News & Updates</NavLink>
            </li> */}
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active cta-button" : "cta-button"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
