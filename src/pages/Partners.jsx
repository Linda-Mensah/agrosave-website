import { Link } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";
import { Handshake, Leaf } from "lucide-react";

// Background image link: https://unsplash.com/photos/a-group-of-hands-holding-each-other-Q6KzWe-lq9Y
const PLANT_IMAGE =
  "https://images.unsplash.com/photo-1655720359248-eeace8c709c5?q=80&w=925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Partners = () => {
  return (
    <PagesLayout>
      <section
        className="page-header partners"
        style={{
          backgroundImage: `url(${PLANT_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          minHeight: "340px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Green overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(46, 125, 50, 0.7) 0%, rgba(27, 94, 32, 0.8) 100%)",
            zIndex: 1,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{ color: "#fff", textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
          >
            Partner With Us
          </h1>
        </div>
      </section>

      {/* Partner Types */}
      <section className="partners-intro">
        <div className="container">
          <div className="partner-fade-card fade-in-up">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.2rem",
                marginBottom: "1rem",
              }}
            >
              {/* <Handshake size={32} color="#2e7d32" /> */}
              <h2 style={{ textAlign: "center", margin: 0 }}>
                We're looking to collaborate with:
              </h2>
            </div>
            <div
              className="partner-types partner-values"
              style={{ justifyContent: "center", textAlign: "center" }}
            >
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
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="why-partner">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.2rem",
              marginBottom: "1rem",
            }}
          >
            <Leaf size={32} color="#2e7d32" />
            <h2 style={{ textAlign: "center", margin: 0 }}>
              Why Partner with Agrosave?
            </h2>
          </div>
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
            <div className="benefit">
              <h3>Access to premium markets</h3>
              <p>
                Connect with high-value markets and restaurants that pay premium
                prices for fresh, quality produce.
              </p>
            </div>
            <div className="benefit">
              <h3>Technology transfer & training</h3>
              <p>
                Receive training on cold storage best practices and modern
                agricultural techniques to maximize your returns.
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
