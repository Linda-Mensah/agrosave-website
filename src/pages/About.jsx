import PagesLayout from "../layouts/PagesLayout";

const About = () => {
  return (
    <PagesLayout>
      <section className="page-header about">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Agrosave is a Greentech company based in Ghana, addressing food
              waste and income instability in the agricultural sector. We're
              building a climate-smart cold chain — using solar-powered cold
              storage to preserve produce and serve food businesses with
              reliable access to fresh, high-quality ingredients.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To reduce food waste and empower smallholder farmers by providing
              sustainable, off-grid cold storage and logistics services — while
              supporting markets, restaurants and eateries with reliable access
              to fresh, locally sourced produce.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Vision</h2>
            <p>
              A Ghana where fresh produce flows seamlessly from farm to fork,
              without waste.
            </p>
          </div>

          <div className="values">
            <h2>Our Values</h2>
            <div className="value-cards">
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>
                  We're committed to environmentally friendly solutions that
                  reduce carbon footprint.
                </p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>
                  We continuously improve our technology to better serve farmers
                  and food businesses.
                </p>
              </div>
              <div className="value-card">
                <h3>Community</h3>
                <p>
                  We believe in strengthening local food systems and supporting
                  rural communities.
                </p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>
                  We operate with transparency and honesty in all our
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default About;
