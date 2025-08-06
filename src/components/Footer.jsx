import {
  Instagram,
  Linkedin,
  LocateIcon,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="agro-footer">
    <div className="agro-footer__container">
      <div className="agro-footer__brand">
        <img
          src="/images/agrosave-logo-transparent.png"
          alt="Agrosave Logo"
          className="w-35 h-15 object-cover filter brightness-0 invert"
        />
        <p>Powering the Future of Agriculture</p>
      </div>

      <div className="agro-footer__links">
        <p>Quick Links</p>
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
          {/* <li>
            <Link to="/news">News & Updates</Link>
          </li> */}
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="agro-footer__contact">
        <p>Contact Us</p>
        <div className="agro-footer__contact-item">
          <LocateIcon size={18} />
          <span>Spintex, Accra, Ghana</span>
        </div>
        <div className="agro-footer__contact-item">
          <Mail size={18} />
          <span>contact@agrosavegh.com</span>
        </div>
        <div className="agro-footer__contact-item">
          <Phone size={18} />
          <span>+233 543 735 112</span>
        </div>
        <div className="agro-footer__socials">
          <a href="#">
            <Linkedin size={20} />
          </a>
          <a href="#">
            <Instagram size={20} />
          </a>
          <a href="#">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>

    <div className="agro-footer__bottom">
      <p>&copy; 2025 Agrosave. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
