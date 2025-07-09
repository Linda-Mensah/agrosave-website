import PagesLayout from "../layouts/PagesLayout";

const Faqs = () => {
  return (
    <PagesLayout>
      <section className="page-header faq">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-intro">
            <p>
              Find answers to the most common questions about Agrosave's
              solar-powered cold storage solutions.
            </p>
          </div>

          <div className="faq-categories">
            <button className="category-btn active" data-category="general">
              General
            </button>
            <button className="category-btn" data-category="farmers">
              For Farmers
            </button>
            <button className="category-btn" data-category="businesses">
              For Businesses
            </button>
            <button className="category-btn" data-category="technical">
              Technical
            </button>
          </div>

          <div className="faq-list">
            {/* General FAQs */}
            <div className="faq-category" id="general">
              <div className="faq-item">
                <div className="faq-question">
                  <h3>What is Agrosave?</h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    Agrosave is a Greentech company based in Ghana that provides
                    solar-powered cold storage solutions to reduce post-harvest
                    losses, increase farmer incomes, and ensure fresh produce
                    reaches urban markets.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>Where does Agrosave operate?</h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    We currently operate in Ghana, with plans to expand to other
                    regions in West Africa in the future.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>How can I partner with Agrosave?</h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    You can partner with us as a farmer, food business, NGO, or
                    investor. Visit our{" "}
                    <a href="partners.html">Partner With Us</a> page or{" "}
                    <a href="contact.html">Contact Us</a> directly to discuss
                    partnership opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Farmers FAQs */}
            <div
              className="faq-category"
              id="farmers"
              style={{ display: "none" }}
            >
              <div className="faq-item">
                <div className="faq-question">
                  <h3>How much does it cost to use Agrosave's cold storage?</h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    Our pricing is based on volume and duration of storage. We
                    offer flexible payment options including pay-per-use and
                    subscription models. Contact us for a customized quote based
                    on your specific needs.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    What types of produce can be stored in your cold storage
                    units?
                  </h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    Our cold storage units are suitable for a wide range of
                    perishable produce including vegetables (tomatoes, peppers,
                    leafy greens), fruits, and some dairy products. The
                    temperature can be adjusted to suit different types of
                    produce.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>How do I join the Agrosave farmer network?</h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    To join our network, fill out the contact form on our
                    website or call us directly. Our team will arrange a visit
                    to assess your needs and discuss how our solutions can
                    benefit your farm.
                  </p>
                </div>
              </div>
            </div>

            {/* Businesses FAQs */}
            <div
              className="faq-category"
              id="businesses"
              style={{ display: "none" }}
            >
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    How does the delivery service work for restaurants and
                    markets?
                  </h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    Our mobile cold storage service collects fresh produce from
                    farms and delivers it directly to your business while
                    maintaining the cold chain. We offer scheduled deliveries
                    based on your needs and inventory requirements.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    Can Agrosave guarantee consistent supply throughout the
                    year?
                  </h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    We work with a network of farmers growing various crops to
                    ensure consistent supply. While seasonal variations affect
                    availability of specific produce, we strive to maintain
                    reliable supply through diversification and planning.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>Do you offer wholesale pricing for businesses?</h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    Yes, we offer competitive wholesale pricing for businesses
                    that order regularly or in large quantities. Contact us to
                    discuss your specific requirements and we'll provide a
                    customized pricing structure.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical FAQs */}
            <div
              className="faq-category"
              id="technical"
              style={{ display: "none" }}
            >
              <div className="faq-item">
                <div className="faq-question">
                  <h3>How do your solar-powered cold storage units work?</h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    Our units use solar panels to generate electricity, which
                    powers efficient cooling systems. They include battery
                    storage to ensure continuous operation during nighttime or
                    cloudy days, making them reliable even in areas without grid
                    electricity.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    What is the storage capacity of your cold storage units?
                  </h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    We offer various sizes of cold storage units, ranging from
                    small units (1-2 tons capacity) suitable for individual
                    farmers to larger community units (5-10 tons capacity).
                    Custom sizes can be designed based on specific needs.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>How do you maintain the cold chain during transport?</h3>
                  <span className="toggle-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    Our refrigerated vans are equipped with solar-powered
                    cooling systems that maintain optimal temperatures during
                    transport. We use insulated containers and temperature
                    monitoring to ensure the cold chain remains unbroken from
                    farm to destination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="more-questions">
            <h3>Still have questions?</h3>
            <p>Contact us directly and we'll be happy to help.</p>
            <a href="contact.html" className="cta-button">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default Faqs;
