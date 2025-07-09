import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagesLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="main-wrapper">{children}</div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default PagesLayout;
