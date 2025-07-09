import {
  Instagram,
  Linkedin,
  LocateIcon,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Agrosave</h3>
            <p>Powering the Future of Agriculture</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
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
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-container">
              <LocateIcon />
              <p>Spintex, Accra, Ghana</p>
            </div>
            <div className="contact-container">
              <Mail />
              <p>agrosavegh@gmail.com</p>
            </div>

            <div>
              <Phone />
              <p>+233 543 735 112</p>
            </div>

            <div className="social-links">
              <a href="#" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2025 Agrosave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
