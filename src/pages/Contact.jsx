import PagesLayout from "../layouts/PagesLayout";
import { Mail, Phone, MapPin, Send, User, MessageSquare, Building } from "lucide-react";

const PLANT_IMAGE = "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1920&q=80";

const Contact = () => {
  return (
    <PagesLayout>
      <section
        className="page-header contact"
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
          <h1 style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Contact Us</h1>
        </div>
      </section>

      <section className="contact-content">
        <div className="diagonal-section">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-header">
                <h2>Get In Touch</h2>
                <p>Ready to transform your agricultural business? Let's talk.</p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={32} />
                  </div>
                  <div className="method-content">
                    <h3>Visit Us</h3>
                    <p>Spintex, Accra, Ghana</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={32} />
                  </div>
                  <div className="method-content">
                    <h3>Call Us</h3>
                    <p>+233 543 735 112</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={32} />
                  </div>
                  <div className="method-content">
                    <h3>Email Us</h3>
                    <p>agrosavegh@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="form-card">
                <div className="form-header">
                  <h3>Send us a Message</h3>
                  <p>We'll get back to you within 24 hours</p>
                </div>
                
                <form className="contact-form" id="contactForm">
                  <div className="form-group">
                    <div className="input-icon">
                      <User size={20} />
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your Full Name"
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-icon">
                      <Mail size={20} />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Your Email Address"
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-icon">
                      <Building size={20} />
                    </div>
                    <input 
                      type="text" 
                      id="organization" 
                      name="organization" 
                      placeholder="Organization (Optional)"
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-icon">
                      <MessageSquare size={20} />
                    </div>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your needs..."
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default Contact;
