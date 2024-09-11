import React from "react";
import "./about.css";
import image1 from "../../../assets/about/about-image1.png";
import image2 from "../../../assets/about/about-image2.png";
import aboutCustomer from "../../../assets/about/about-customer.png";
import aboutQuality from "../../../assets/about/about-quality.png";

export default function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_wrapper">
                <figure className="mb-0 about-image1">
                  <img src={image1} alt="About Us 1" className="img-fluid" />
                </figure>
                {/* <figure className="mb-0 about-image2">
                  <img
                    src={image2}
                    alt="About Us 2"
                    className="img-fluid"
                  />
                </figure> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_content" data-aos="fade-right">
                <h5 className="aboutH5">About us</h5>
                <h2 className="aboutH2">
                  Empowering People <br></br> By Keeping Them Well
                </h2>
                {/* <p className="text-size-18">
                  Repellendus autem ruibusdam et aut officiis debitis aut re
                  necessitatibus saepe eveniet ut et voluptates repudianda sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus.
                </p> */}
                <div className="about-lowercontent mt-5">
                  <div className="d-flex align-items-start">
                    <figure className="mb-0 icon">
                      <img
                        src={aboutCustomer}
                        alt="Customer Satisfaction"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="content ms-3">
                      <h4>100% Customers Satisfaction</h4>
                      <p className="text-size-18">
                        At the forefront of AI, our priority is your success and
                        satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mt-4">
                    <figure className="mb-0 icon">
                      <img
                        src={aboutQuality}
                        alt="Quality Assurance"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="content ms-3">
                      <h4>Quality Assurance Guarantee</h4>
                      <p className="text-size-18">
                        Innovation with integrity—quality assured in every AI
                        application we develop
                      </p>
                    </div>
                  </div>
                </div>
                {/* <button className="read_more">
                  <a
                    className=" text-decoration-none"
                    href="./about.html"
                  >
                    Read More
                    <i className="circle fa-regular fa-angle-right"></i>
                  </a>
                </button> */}

                <button className="learn-more mt-2">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Read More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
