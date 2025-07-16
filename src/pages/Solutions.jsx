import { Link } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";
import {
  Snowflake,
  Truck,
  Zap,
  Shield,
  Globe,
  Clock,
  Users,
  Target,
} from "lucide-react";

const PLANT_IMAGE =
  "https://plus.unsplash.com/premium_photo-1733266923168-89b7e70efe0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZXJzb24lMjBoYW5kJTIwZ2FyZGVuaW5nJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D";

const Solutions = () => {
  return (
    <PagesLayout>
      <section
        className="page-header solutions"
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
            Our Solution
          </h1>
        </div>
      </section>

      <section className="solutions-intro">
        <div className="container">
          <h2>Our Solution</h2>
          <div className="solution-features-grid">
            <div className="solution-feature">
              <div className="feature-icon card-icon-container">
                <Snowflake size={48} />
              </div>
              <h3>Stationary Cold Storage</h3>
              <p>
                Solar-powered cold storage units installed on farms to extend
                shelf life and reduce spoilage.
              </p>
            </div>
            <div className="solution-feature">
              <div className="feature-icon card-icon-container">
                <Truck size={48} />
              </div>
              <h3>Mobile Cold Storage</h3>
              <p>
                Refrigerated transport that maintains cold chain integrity from
                farm to market for fresh delivery.
              </p>
            </div>
            <div className="solution-feature">
              <div className="feature-icon card-icon-container">
                <Zap size={48} />
              </div>
              <h3>Solar Power Solutions</h3>
              <p>
                Renewable energy systems powering our cold storage, reducing
                costs and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features Grid */}
      <section className="solution-features">
        <div className="container">
          <h2>Why Choose Our Solutions?</h2>
          <div className="solution-features-grid">
            <div className="solution-feature">
              <div className="feature-icon card-icon-container">
                <Zap size={48} />
              </div>
              <h3>Solar Powered</h3>
              <p>
                Renewable energy reduces costs and environmental impact while
                ensuring reliable operation.
              </p>
            </div>
            <div className="solution-feature">
              <div className="feature-icon card-icon-container">
                <Shield size={48} />
              </div>
              <h3>Quality Guaranteed</h3>
              <p>
                Maintain optimal temperature and humidity levels to preserve
                produce quality and freshness.
              </p>
            </div>
            <div className="solution-feature">
              <div className="feature-icon card-icon-container">
                <Globe size={48} />
              </div>
              <h3>Market Access</h3>
              <p>
                Connect farmers directly to premium markets and buyers for
                better pricing opportunities.
              </p>
            </div>
            <div className="solution-feature">
              <div className="feature-icon card-icon-container">
                <Clock size={48} />
              </div>
              <h3>24/7 Monitoring</h3>
              <p>
                Real-time temperature monitoring and alerts ensure your produce
                stays fresh around the clock.
              </p>
            </div>
            <div className="solution-feature">
              <div className="feature-icon card-icon-container">
                <Users size={48} />
              </div>
              <h3>Community Focus</h3>
              <p>
                Designed specifically for smallholder farmers and local
                agricultural communities.
              </p>
            </div>
            <div className="solution-feature">
              <div className="feature-icon card-icon-container">
                <Target size={48} />
              </div>
              <h3>Proven Results</h3>
              <p>
                Demonstrated success in reducing post-harvest losses and
                increasing farmer incomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default Solutions;
