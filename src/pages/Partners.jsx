import { Link } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";

const Partners = () => {
  return (
    <PagesLayout>
      <section className="page-header partners">
        <div className="container">
          <h1>Partner With Us</h1>
        </div>
      </section>

      {/* Partner Types */}
      <section className="partners-intro">
        <div className="container">
          <h2>🤝 We're looking to collaborate with:</h2>
          <div className="partner-types">
            <div className="partner-type">
              <h3>Smallholder Farmers</h3>
              <p>
                Join our network to access cold storage, reduce spoilage, and
                improve your earnings.
              </p>
              <Link to="/contact" className="cta-button">
                Get Started
              </Link>
            </div>
            <div className="partner-type">
              <h3>Markets, Restaurants, Hotels & Eateries</h3>
              <p>
                Partner with us for consistent access to fresh produce while
                supporting local farming communities.
              </p>
              <Link to="/contact" className="cta-button">
                Get Started
              </Link>
            </div>
            <div className="partner-type">
              <h3>NGOs, Cooperatives & Investors</h3>
              <p>
                Help us scale our solution and expand cold storage access to
                more communities across Ghana.
              </p>
              <Link to="/contact" className="cta-button">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="why-partner">
        <div className="container">
          <h2>🌱 Why Partner with Agrosave?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <h3>Reduce food waste</h3>
              <p>
                Our cold storage solutions extend shelf life and prevent
                spoilage, reducing waste throughout the supply chain.
              </p>
            </div>
            <div className="benefit">
              <h3>Improve livelihoods</h3>
              <p>
                Farmers earn more by selling at optimal prices, while businesses
                gain reliable access to quality produce.
              </p>
            </div>
            <div className="benefit">
              <h3>Support green innovation</h3>
              <p>
                Our solar-powered technology reduces carbon emissions while
                solving critical food system challenges.
              </p>
            </div>
            <div className="benefit">
              <h3>Build a more efficient and fair food chain</h3>
              <p>
                Join our movement to create a more equitable and sustainable
                food system in Ghana.
              </p>
            </div>
          </div>

          <div className="partner-cta">
            <h3>Ready to join our network?</h3>
            <Link to="/contact" className="cta-button">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default Partners;
