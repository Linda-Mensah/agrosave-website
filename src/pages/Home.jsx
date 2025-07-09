import PagesLayout from "../layouts/PagesLayout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PagesLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              🌿 Powering the Future of Agriculture with Cold Storage Innovation
            </h1>
            <p className="hero-text">
              Agrosave provides solar-powered cold storage solutions to reduce
              post-harvest losses, increase farmer incomes, and ensure fresh,
              high-quality produce reaches urban markets.
            </p>
            <Link to="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Our Services</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="icon">🧊</div>
              <h3>Stationary Cold Storage</h3>
              <p>
                Solar-powered cold storage units installed directly on farms,
                extending shelf life and reducing spoilage.
              </p>
              <Link to="/solutions" className="learn-more">
                Learn More
              </Link>
            </div>
            <div className="feature-card">
              <div className="icon">🚛</div>
              <h3>Mobile Cold Storage</h3>
              <p>
                Refrigerated transport that maintains cold chain integrity from
                farm to market, ensuring fresh delivery.
              </p>
              <Link to="/solutions" className="learn-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Preview Section */}
      <section className="partners-preview">
        <div className="container">
          <h2>Who We Serve</h2>
          <div className="partner-groups">
            <div className="partner-group">
              <h3>Smallholder Farmers</h3>
              <p>
                Access reliable cold storage to reduce spoilage and improve
                earnings.
              </p>
            </div>
            <div className="partner-group">
              <h3>Markets & Restaurants</h3>
              <p>
                Get consistent access to fresh produce while supporting local
                farming communities.
              </p>
            </div>
            <div className="partner-group">
              <h3>NGOs & Investors</h3>
              <p>Help scale our solution to more communities across Ghana.</p>
            </div>
          </div>
          <Link to="/partners" className="cta-button">
            Partner With Us
          </Link>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <h3>Reduced Food Waste</h3>
              <p>Extending shelf life of perishables by 2–10+ days</p>
            </div>
            <div className="stat">
              <h3>Improved Livelihoods</h3>
              <p>Helping farmers earn better prices for their produce</p>
            </div>
            <div className="stat">
              <h3>Sustainable Solution</h3>
              <p>Clean, solar-powered technology reducing emissions</p>
            </div>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default Home;
