import React, { useState } from 'react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const toggle = (id) => {
    setOpenId((prevOpenId) => (prevOpenId === id ? null : id));
  };

  return (
    <div className="accordion-section-inner position-relative">
      <div className="accordion-inner">
        <div id="accordion1">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div className="accordion-card" key={item.id}>
                <div className="card-header" id={`heading${item.id}`}>
                  <button
                    className="btn btn-link"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`collapse${item.id}`}
                  >
                    <h4>{item.question}</h4>
                  </button>
                </div>
                <div
                  id={`collapse${item.id}`}
                  className={`collapse ${isOpen ? 'show' : ''}`}
                  aria-labelledby={`heading${item.id}`}
                >
                  <div className="card-body">
                    <p className="text-size-18 text-left mb-0">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
