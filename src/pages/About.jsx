import PagesLayout from "../layouts/PagesLayout";
import { Leaf, Users, Target, Heart, Award, Globe, TrendingUp, Shield, Star, Handshake } from "lucide-react";
import { useState, useEffect } from "react";

const PLANT_IMAGE = "https://plus.unsplash.com/premium_photo-1680322763961-b02b8e4ea829?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJsYWNrJTIwcGVyc29uJTIwaGFuZCUyMGhvbGRpbmclMjBzZWVkbGluZyUyMGluJTIwc29pbHxlbnwwfHwwfHx8MA%3D%3D";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselItems = [
    {
      icon: <Leaf size={64} />,
      title: "Sustainable Agriculture",
      description: "Empowering farmers with green technology to preserve harvests and protect our planet. Our solar-powered solutions reduce carbon emissions while increasing productivity."
    },
    {
      icon: <Users size={64} />,
      title: "Community Impact", 
      description: "Supporting local farming communities and strengthening Ghana's food security. We're building partnerships that create lasting positive change across rural areas."
    },
    {
      icon: <Target size={64} />,
      title: "Innovation Focus",
      description: "Leveraging solar power and smart technology to solve real agricultural challenges. Our cutting-edge cold storage systems are designed for Africa's unique needs."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <PagesLayout>
      <section
        className="page-header about"
        style={{
          backgroundImage: `url(${PLANT_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          minHeight: '340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Green overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(135deg, rgba(46, 125, 50, 0.7) 0%, rgba(27, 94, 32, 0.8) 100%)',
            zIndex: 1,
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>About Us</h1>
        </div>
      </section>

      {/* Agricultural Carousel Section */}
      <section className="agricultural-carousel">
        <div className="container">
          <div className="carousel-content">
            {carouselItems.map((item, index) => (
              <div 
                key={index}
                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="carousel-icon">
                  {item.icon}
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
            <div className="carousel-dots">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values Grid */}
      <section className="mission-vision-grid">
        <div className="container">
          <div className="grid-3">
            <div className="mission-card">
              <div className="card-icon">
                <Target size={48} />
              </div>
              <h3>Our Mission</h3>
              <p>Reduce food waste and empower smallholder farmers with sustainable cold storage solutions.</p>
            </div>
            <div className="vision-card">
              <div className="card-icon">
                <Globe size={48} />
              </div>
              <h3>Our Vision</h3>
              <p>A Ghana where fresh produce flows seamlessly from farm to fork, without waste.</p>
            </div>
            <div className="values-card">
              <div className="card-icon">
                <Heart size={48} />
              </div>
              <h3>Our Values</h3>
              <p>Sustainability, innovation, community, and integrity guide everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid with Background Images */}
      <section className="values-showcase">
        <div className="container">
          <h2>What Drives Us</h2>
          <div className="values-grid">
            <div className="value-item sustainability">
              <div className="value-content">
                <div className="value-icon">
                  <Leaf size={48} />
                </div>
                <h3>Sustainability</h3>
                <p>Environmentally friendly solutions that reduce carbon footprint.</p>
              </div>
            </div>
            <div className="value-item innovation">
              <div className="value-content">
                <div className="value-icon">
                  <TrendingUp size={48} />
                </div>
                <h3>Innovation</h3>
                <p>Continuous improvement of technology to better serve farmers.</p>
              </div>
            </div>
            <div className="value-item community">
              <div className="value-content">
                <div className="value-icon">
                  <Users size={48} />
                </div>
                <h3>Community</h3>
                <p>Strengthening local food systems and supporting rural communities.</p>
              </div>
            </div>
            <div className="value-item integrity">
              <div className="value-content">
                <div className="value-icon">
                  <Shield size={48} />
                </div>
                <h3>Integrity</h3>
                <p>Transparency and honesty in all our partnerships.</p>
              </div>
            </div>
            <div className="value-item quality">
              <div className="value-content">
                <div className="value-icon">
                  <Star size={48} />
                </div>
                <h3>Quality</h3>
                <p>Delivering premium cold storage solutions that meet the highest standards.</p>
              </div>
            </div>
            <div className="value-item partnership">
              <div className="value-content">
                <div className="value-icon">
                  <Handshake size={48} />
                </div>
                <h3>Partnership</h3>
                <p>Building strong collaborations with farmers, markets, and communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Impact Section */}
      <section className="team-impact">
        <div className="container">
          <div className="impact-highlight">
            <div className="impact-icon">
              <Award size={64} />
            </div>
            <h2>Making a Difference</h2>
            <p>Join us in building a more sustainable and equitable food system for Ghana.</p>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default About;

