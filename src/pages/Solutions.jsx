import { Link } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";

const Solutions = () => {
  return (
    <PagesLayout>
      <section className="page-header solutions">
        <div className="container">
          <h1>Our Solution</h1>
        </div>
      </section>

      <section className="solutions-intro">
        <div className="container">
          <p className="intro-text">
            At Agrosave, we offer two distinct solar-powered cold storage
            services designed to serve both smallholder farmers and food
            businesses. Together, these solutions reduce post-harvest losses,
            improve incomes, and ensure the consistent availability of fresh
            produce.
          </p>
        </div>
      </section>

      <section className="solution-details">
        <div className="container">
          <div className="solution-card">
            <div className="solution-icon">🧊</div>
            <div className="solution-content">
              <h2>
                1. Stationary Solar-Powered Cold Storage (On-Farm Service)
              </h2>
              <p className="solution-description">
                This service is designed for smallholder farmers who need
                immediate, reliable storage after harvesting their crops.
              </p>

              <h3>How it works:</h3>
              <p>
                We install solar-powered cold storage units directly on farms,
                especially in rural areas without access to electricity.
              </p>

              <h3>Benefits:</h3>
              <ul className="benefits-list">
                <li>
                  Extends shelf life of perishables (e.g., tomatoes) by 2 to 10+
                  days
                </li>
                <li>Reduces spoilage and food waste</li>
                <li>
                  Gives farmers flexibility to store and sell during favorable
                  market conditions
                </li>
                <li>
                  Helps farmers earn better prices and avoid post-harvest losses
                </li>
              </ul>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-icon">🚛</div>
            <div className="solution-content">
              <h2>
                2. Mobile Solar-Powered Cold Storage (Farm-to-Market Delivery
                Service)
              </h2>
              <p className="solution-description">
                This service is tailored for markets, restaurants, eateries, and
                food vendors that require consistent access to fresh,
                high-quality produce.
              </p>

              <h3>How it works:</h3>
              <p>
                We use solar-powered refrigerated vans to collect produce from
                farms and deliver it to urban areas while maintaining cold chain
                integrity during transport.
              </p>

              <h3>Benefits:</h3>
              <ul className="benefits-list">
                <li>Ensures fresh produce is delivered in perfect condition</li>
                <li>
                  Provides markets, restaurants and eateries with a reliable
                  supply of local ingredients
                </li>
                <li>Reduces dependency on unreliable supply chains</li>
                <li>Supports cleaner, low-emission food logistics</li>
              </ul>
            </div>
          </div>

          <div className="solution-summary">
            <p>
              Together, these services create a closed-loop cold chain — from
              farm to fork — that is clean, sustainable, and efficient.
            </p>
            <Link to="/partners" className="cta-button">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default Solutions;
