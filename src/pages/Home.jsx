import PagesLayout from "../layouts/PagesLayout";
import { Link } from "react-router-dom";
import {
  Snowflake,
  Truck,
  Building2,
  Handshake,
  Newspaper,
  HelpCircle,
  Phone,
  Users,
  Target,
  Leaf,
  Zap,
  Shield,
  Globe,
  Clock,
} from "lucide-react";
import { useEffect } from "react";

const AGRO_IMAGE =
  "https://media.istockphoto.com/id/1221265610/photo/african-american-father-and-daughter-holding-small-seedling-at-community-garden-greenery.webp?a=1&b=1&s=612x612&w=0&k=20&c=O0d8Bxfu-2jqvnLs6WkKLQxbeFcMdT7273S-cs4wSGw=";

const Home = () => {
  // Remove heroImages array
  useEffect(() => {
    const interval = setInterval(() => {
      // setFade(false); // This line is removed
      // setTimeout(() => { // This line is removed
      //   setCurrentHero((prev) => (prev + 1) % heroImages.length); // This line is removed
      //   setFade(true); // This line is removed
      // }, 600); // This line is removed
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PagesLayout>
      {/* Hero Section */}
      <section
        className="hero hero-carousel hero-image"
        style={{
          backgroundImage: `url(${AGRO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          minHeight: "100vh",
          marginTop: "80px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
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
          <div className="hero-content">
            <h1>
              <Leaf size={64} className="inline-icon" /> Powering the Future of
              Agriculture with Cold Storage Innovation
            </h1>
            <Link to="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
        </div>
        <div
          className="carousel-dots hero-carousel-dots"
          style={{ display: "none" }}
        ></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Our Services</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="icon">
                <Snowflake size={48} />
              </div>
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
              <div className="icon">
                <Truck size={48} />
              </div>
              <h3>Mobile Cold Storage</h3>
              <p>
                Refrigerated transport that maintains cold chain integrity from
                farm to market, ensuring fresh delivery.
              </p>
              <Link to="/solutions" className="learn-more">
                Learn More
              </Link>
            </div>
            <div className="feature-card">
              <div className="icon">
                <Zap size={48} />
              </div>
              <h3>Solar Power Solutions</h3>
              <p>
                Renewable energy systems that power our cold storage units,
                reducing costs and environmental impact.
              </p>
              <Link to="/solutions" className="learn-more">
                Learn More
              </Link>
            </div>
            <div className="feature-card">
              <div className="icon">
                <Shield size={48} />
              </div>
              <h3>Quality Assurance</h3>
              <p>
                Comprehensive monitoring and maintenance services to ensure
                optimal performance and food safety standards.
              </p>
              <Link to="/solutions" className="learn-more">
                Learn More
              </Link>
            </div>
            <div className="feature-card">
              <div className="icon">
                <Globe size={48} />
              </div>
              <h3>Market Access</h3>
              <p>
                Connect farmers with premium markets and buyers, ensuring better
                prices and consistent demand for produce.
              </p>
              <Link to="/solutions" className="learn-more">
                Learn More
              </Link>
            </div>
            <div className="feature-card">
              <div className="icon">
                <Clock size={48} />
              </div>
              <h3>24/7 Support</h3>
              <p>
                Round-the-clock technical support and emergency services to keep
                your cold storage running smoothly.
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
            <div className="partner-group">
              <h3>Cooperatives</h3>
              <p>
                Pool resources and share cold storage facilities to maximize
                benefits for all members.
              </p>
            </div>
            <div className="partner-group">
              <h3>Export Companies</h3>
              <p>
                Access premium quality produce for international markets with
                guaranteed freshness standards.
              </p>
            </div>
            <div className="partner-group">
              <h3>Educational Institutions</h3>
              <p>
                Partner with research institutions to develop innovative
                agricultural technologies and practices.
              </p>
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
            <div className="stat">
              <h3>Community Growth</h3>
              <p>Supporting 500+ farmers across multiple regions</p>
            </div>
            <div className="stat">
              <h3>Market Access</h3>
              <p>Connecting rural farmers to urban markets</p>
            </div>
            <div className="stat">
              <h3>Technology Adoption</h3>
              <p>Training 200+ farmers in modern storage techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Guide Section */}
      <section className="navigation-guide">
        <div className="container">
          <h2>Explore Our Website</h2>
          <p>Click on any section below to learn more about Agrosave:</p>
          <div className="nav-cards">
            <Link to="/about" className="nav-card">
              <div className="nav-icon">
                <Building2 size={48} />
              </div>
              <h3>About Us</h3>
              <p>Learn about our mission, vision, and values</p>
            </Link>
            <Link to="/solutions" className="nav-card">
              <div className="nav-icon">
                <Snowflake size={48} />
              </div>
              <h3>Our Solutions</h3>
              <p>Discover our cold storage services</p>
            </Link>
            <Link to="/partners" className="nav-card">
              <div className="nav-icon">
                <Handshake size={48} />
              </div>
              <h3>Partner With Us</h3>
              <p>Join our network of farmers and businesses</p>
            </Link>
            <Link to="#" className="nav-card">
              <div className="nav-icon">
                <Newspaper size={48} />
              </div>
              <h3>News & Updates</h3>
              <p>Stay updated with our latest developments</p>
            </Link>
            <Link to="/faq" className="nav-card">
              <div className="nav-icon">
                <HelpCircle size={48} />
              </div>
              <h3>FAQ</h3>
              <p>Find answers to common questions</p>
            </Link>
            <Link to="/contact" className="nav-card">
              <div className="nav-icon">
                <Phone size={48} />
              </div>
              <h3>Contact Us</h3>
              <p>Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default Home;
