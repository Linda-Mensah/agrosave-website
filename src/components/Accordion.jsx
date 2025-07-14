import { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="accordion" role="tablist" aria-multiselectable="false">
      {items.map((item, idx) => (
        <div className="accordion-item" key={item.id}>
          <button
            className={`accordion-title${openIndex === idx ? " open" : ""}`}
            aria-expanded={openIndex === idx}
            aria-controls={`accordion-panel-${item.id}`}
            id={`accordion-title-${item.id}`}
            onClick={() => handleToggle(idx)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") handleToggle(idx);
            }}
            type="button"
            role="tab"
            tabIndex={0}
          >
            {item.question}
          </button>
          <div
            id={`accordion-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`accordion-title-${item.id}`}
            className={`accordion-panel${openIndex === idx ? " open" : ""}`}
            style={{ display: openIndex === idx ? "block" : "none" }}
          >
            <div className="accordion-content">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion; 