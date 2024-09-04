import React from "react";
import "./chooseus.css";
import sideshape from "../../../assets/choose/choose-image.png";
import choose_sideshape from "../../../assets/choose/choose-sideshape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Chooseus() {
  return (
    <>
      <section className="container-fluid py-4  chooseBg">
        <div className="container">
          <figure className="choose-sideshape  w-100 mb-0">
            <img
              src={choose_sideshape}
              alt="Side Shape"
              className="choose_sideshape"
            />
          </figure>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
              <div className="choose_wrapper">
                <figure className="mb-0 choose-image">
                  <img src={sideshape} alt="Choose Us" className="img-fluid" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
              <div className="choose_content" data-aos="fade-right">
                <h5 className="chooseH5">Why Choose Us</h5>
                <h2 className="text-white">
                  Get Closer Look How Business Develop in AI Data Analysis
                </h2>
                <p className="text-white text-size-18">
                  Harness the power of AI to transform your business, driving
                  innovation and ensuring sustainable growth.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="text-white mt-3">
                    <span className="circle">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>{" "}
                    Empowering Your Vision with Intelligent Solution
                  </li>
                  <li className="text-white mt-3">
                    <span className="circle">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                    Precision, Performance, and Predictive Power
                  </li>
                  <li className="text-white mt-3">
                    <span className="circle">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                    Your Partner in Next-Generation Innovation
                  </li>
                </ul>
                <button className="learn-more mt-5">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
