import PagesLayout from "../layouts/PagesLayout";

const News = () => {
  return (
    <PagesLayout>
      {/* Page Header */}
      <section className="page-header news">
        <div className="container">
          <h1>News & Updates</h1>
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
              <a href="#" className="read-more">
                Read More
              </a>
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
              <a href="#" className="read-more">
                Read More
              </a>
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
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter">
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter to receive the latest news and updates
              from Agrosave.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default News;
