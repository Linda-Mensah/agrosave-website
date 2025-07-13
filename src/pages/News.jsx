import PagesLayout from "../layouts/PagesLayout";

const PLANT_IMAGE = "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1920&q=80";

const News = () => {
  return (
    <PagesLayout>
      <section
        className="page-header news"
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
          <h1 style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>News & Updates</h1>
        </div>
      </section>

      {/* News Content */}
      <section className="news-content">
        <div className="container">
          <div className="news-grid">
            {/* News Item 1 */}
            <div className="news-item">
              <div className="news-date">June 15, 2023</div>
              <h2>
                Agrosave Launches First Solar Cold Storage Unit in Eastern
                Region
              </h2>
              <p>
                We're excited to announce the successful installation of our
                first solar-powered cold storage unit in Ghana's Eastern Region,
                serving a community of 50+ smallholder farmers.
              </p>
            </div>

            {/* News Item 2 */}
            <div className="news-item">
              <div className="news-date">May 3, 2023</div>
              <h2>
                Partnership Announcement: Agrosave Teams Up with Local
                Restaurant Association
              </h2>
              <p>
                Agrosave has formed a strategic partnership with the Accra
                Restaurant Association to provide fresh, locally-sourced produce
                to urban eateries.
              </p>
            </div>

            {/* News Item 3 */}
            <div className="news-item">
              <div className="news-date">April 12, 2023</div>
              <h2>Agrosave Secures Funding to Expand Operations</h2>
              <p>
                We're pleased to announce that Agrosave has secured seed funding
                to expand our cold storage network to additional regions in
                Ghana.
              </p>
            </div>

            {/* News Item 4 */}
            <div className="news-item">
              <div className="news-date">March 28, 2023</div>
              <h2>
                Mobile Cold Storage Fleet Expansion: New Solar-Powered Vans
                Added
              </h2>
              <p>
                Agrosave has expanded its mobile cold storage fleet with three
                new solar-powered refrigerated vans to improve farm-to-market
                delivery services.
              </p>
            </div>

            {/* News Item 5 */}
            <div className="news-item">
              <div className="news-date">February 15, 2023</div>
              <h2>
                Training Program Success: 100+ Farmers Complete Cold Storage
                Best Practices Course
              </h2>
              <p>
                Our comprehensive training program has successfully equipped over
                100 farmers with essential knowledge for maximizing cold storage
                benefits and reducing post-harvest losses.
              </p>
            </div>

            {/* News Item 6 */}
            <div className="news-item">
              <div className="news-date">January 8, 2023</div>
              <h2>
                Impact Report: 40% Reduction in Post-Harvest Losses Achieved
              </h2>
              <p>
                Our latest impact assessment shows that farmers using Agrosave
                cold storage solutions have achieved an average 40% reduction in
                post-harvest losses, significantly improving their incomes.
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter improved-newsletter">
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter to receive the latest news and updates
              from Agrosave.
            </p>
            <form className="newsletter-form">
              <div className="newsletter-input-group">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </div>
              <small className="newsletter-privacy">We respect your privacy. No spam, ever.</small>
            </form>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default News;
