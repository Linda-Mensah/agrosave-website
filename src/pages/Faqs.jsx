import PagesLayout from "../layouts/PagesLayout";
import { HelpCircle, Users, Building2, Settings, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const faqData = {
    general: [
      {
        id: "gen1",
        question: "What is Agrosave?",
        answer: "Agrosave is a Greentech company providing solar-powered cold storage solutions to reduce post-harvest losses and increase farmer incomes in Ghana."
      },
      {
        id: "gen2", 
        question: "Where are you located?",
        answer: "We're based in Spintex, Accra, Ghana, serving communities across the country."
      }
    ],
    farmers: [
      {
        id: "farm1",
        question: "How much does cold storage cost?",
        answer: "Our pricing is flexible and designed for smallholder farmers. Contact us for a personalized quote."
      },
      {
        id: "farm2",
        question: "What crops can I store?",
        answer: "We can store most perishable crops including tomatoes, peppers, leafy greens, and fruits."
      }
    ],
    businesses: [
      {
        id: "bus1",
        question: "How do I partner with you?",
        answer: "Simply contact us through our website or call +233 543 735 112 to discuss partnership opportunities."
      },
      {
        id: "bus2",
        question: "What delivery areas do you cover?",
        answer: "We currently serve Accra and surrounding areas, with plans to expand across Ghana."
      }
    ],
    technical: [
      {
        id: "tech1",
        question: "How does solar power work?",
        answer: "Our systems use solar panels to generate electricity, stored in batteries to power refrigeration units 24/7."
      },
      {
        id: "tech2",
        question: "What's the temperature range?",
        answer: "Our cold storage maintains temperatures between 2-8°C, ideal for most agricultural produce."
      }
    ]
  };

  return (
    <PagesLayout>
      <section className="page-header faq clear-image">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-intro">
            <div className="intro-icon">
              <HelpCircle size={64} />
            </div>
            <h2>Find Your Answers</h2>
            <p>Quick answers to common questions about our services</p>
          </div>

          <div className="faq-categories">
            <button 
              className={`category-btn ${activeCategory === "general" ? "active" : ""}`}
              onClick={() => setActiveCategory("general")}
            >
              <HelpCircle size={20} />
              General
            </button>
            <button 
              className={`category-btn ${activeCategory === "farmers" ? "active" : ""}`}
              onClick={() => setActiveCategory("farmers")}
            >
              <Users size={20} />
              For Farmers
            </button>
            <button 
              className={`category-btn ${activeCategory === "businesses" ? "active" : ""}`}
              onClick={() => setActiveCategory("businesses")}
            >
              <Building2 size={20} />
              For Businesses
            </button>
            <button 
              className={`category-btn ${activeCategory === "technical" ? "active" : ""}`}
              onClick={() => setActiveCategory("technical")}
            >
              <Settings size={20} />
              Technical
            </button>
          </div>

          <div className="faq-grid">
            {faqData[activeCategory].map((item) => (
              <div key={item.id} className="faq-card">
                <div 
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                >
                  <h3>{item.question}</h3>
                  <div className="toggle-icon">
                    {openItems[item.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
                {openItems[item.id] && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <h3>Still have questions?</h3>
            <p>Get in touch with our team for personalized assistance</p>
            <a href="/contact" className="cta-button">Contact Us</a>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default Faqs;
