import React, { useEffect } from "react";
import "./faq.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "react-bootstrap/Accordion";
import ContactForm from "./contactForm";

export default function Faq() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="container-fluid faqBg py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="faq_content" data-aos="fade-right">
              <h5>FAQ's</h5>
              <h2>Frequently Asked Questions</h2>
              <Accordion>
                <Accordion.Item eventKey="0" className="accStyle mt-4">
                  <Accordion.Header>
                    What is Artificial Intelligence (AI), and how can it benefit
                    my business?
                  </Accordion.Header>
                  <Accordion.Body>
                    AI automates tasks, provides data-driven insights, and
                    enhances decision-making, improving efficiency and reducing
                    costs.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mt-5 rounded">
                  <Accordion.Header>
                    How does your AI solution integrate with existing IT
                    systems?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our AI solutions integrate seamlessly with your existing
                    systems using APIs and data connectors for smooth
                    communication.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mt-5 rounded">
                  <Accordion.Header>
                    What industries can benefit from your AI solutions?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our AI solutions are adaptable for various industries,
                    including healthcare, finance, retail, and manufacturing.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mt-5 rounded">
                  <Accordion.Header>
                    How do you ensure the security and privacy of data used in
                    AI models?
                  </Accordion.Header>
                  <Accordion.Body>
                    We prioritize data security with strict adherence to
                    regulations, encryption, and robust data governance
                    practices.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="need-section">
              <div className="need_content">
                <h3>Need any Help!</h3>
                <h2 className="text-size-16">
                  Contact us to get more information.
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
