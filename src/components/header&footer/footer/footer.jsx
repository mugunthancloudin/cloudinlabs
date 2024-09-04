import React from "react";
import "./footer.css";
import logo from "../../../assets/footer/cloudinLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <section className="footerSection py-3">
      <div className="container">
        {/* <figure className="footer-sideshape mb-0">
              <img src="./assets/images/footer-sideshape.png" alt="" className="img-fluid" />
            </figure> */}
        <div className="middle-portion">
          <div className="row mt-2">
            <div className="col-lg-4 col-md-5 col-sm-6 col-12">
              <a href="./index.html">
                <figure className="footer-logo">
                  <img src={logo} className="img-fluid w-25" alt="Logo" />
                </figure>
              </a>
              <p className="text-size-16  mt-4 footer-text text-white">
                Bring to the table win-win survival strategies to ensure
                proactive domination.
              </p>
              <ul className="list-unstyled mb-0 d-flex social-icons mt-4">
                <li className="circles justify-content-center align-items-center ">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="socialIcon"
                    />
                  </a>
                </li>
                <li className="circles ms-3">
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} className="socialIcon" />
                  </a>
                </li>
                <li className="circles ms-3">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="socialIcon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-md-block d-none">
              <div className="links">
                <h4 className="heading text-white">Useful Links</h4>
                <ul className="list-unstyled  mb-0">
                  {[
                    { name: "Home", link: "./index.html" },
                    { name: "About", link: "./about.html" },
                    { name: "Services", link: "./service.html" },
                    { name: "Projects", link: "./projects.html" },
                    { name: "Contact us", link: "./contact.html" },
                  ].map((item, index) => (
                    <li key={index}>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        color="white"
                        className="mt-3"
                      />
                      <a
                        href={item.link}
                        className=" text-white ms-2 text-decoration-none"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-12 col-12 d-lg-block d-none">
              <div className="links list-pd">
                <h4 className="heading text-white">Our Services</h4>
                <ul className="list-unstyled mb-0">
                  {[
                    { name: "Robotic Automation", link: "./service.html" },
                    { name: "Testimonial", link: "./projects.html" },
                    { name: "Predictive Analysis", link: "./service.html" },
                    { name: "Our Team", link: "./team.html" },
                    { name: "Faq", link: "./faq.html" },
                  ].map((item, index) => (
                    <li key={index}>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        color="white"
                        className="mt-3"
                      />
                      <a
                        href={item.link}
                        className="text-white ms-2 text-decoration-none"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-sm-block">
              <div className="icon">
                <h4 className="heading text-white">Contact us</h4>
                <ul className="list-unstyled mb-0">
                  <li className="text">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="footerfaIcon mt-3"
                    />
                    <a href="tel:+4733378901" className="text-white">
                      0422 - 4516093
                    </a>
                  </li>
                  <li className="text">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="footerfaIcon mt-3"
                    />
                    <a href="mailto:info@repay.com" className="text-white">
                      Info@cloudinlabs.com
                    </a>
                  </li>
                  <li className="text d-flex">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="footerfaIcon mt-3"
                    />
                    <p className="text-white mt-2 ">
                      10th street, Shri sai Towers, Axis Bank Building,
                      Coimbatore, Tamil Nadu, India - 641012.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="fixed-form-container">
          <div className="image">
            <figure className="footer-image mb-0">
              <img
                src="./assets/images/footer-image.png"
                alt=""
                className="img-fluid"
              />
            </figure>
          </div>
          <div className="body" style={{ display: "none" }}>
            <form id="contactpage1" method="POST" action="./contact-form.php">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name:"
                  name="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email:"
                  name="emailid"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone:"
                  name="phone"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form_style"
                  placeholder="Message"
                  rows="3"
                  name="msg"
                ></textarea>
              </div>
              <button type="submit" className="submit_now text-decoration-none">
                Submit Now
              </button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <div className="row ">
            <div className="col-12">
              <p className="mt-3 text-white">
                Copyright 2023, Artelligence.com All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
