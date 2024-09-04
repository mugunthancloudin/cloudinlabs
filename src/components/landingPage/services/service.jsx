import React from "react";
import "./service.css";
import roboAnima from "../../../assets/service/service-reboticon.png";
import machineLesrning from "../../../assets/service/service-learningicon.png";
import education from "../../../assets/service/service-scienceicon.png";
import analysis from "../../../assets/service/service-analysicon.png";

export default function Service() {
  return (
    <>
      <section className="service-section  position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 serviceContent col-md-12 col-sm-12 col-12">
              <div className="" data-aos="fade-right">
                <h5 className="serviceH5">Services we provide</h5>
                <h2 className="serviceH2">
                  Our Purpose is <br></br> To Deliver Excellence <br></br> in
                  Service and Execution
                </h2>
                <p className="serviceP">
                  Repellendus autem ruibusdam et aut officiis debitis aut re
                  necessitatibus saepe eveniet ut et voluptates repudianda sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus.
                </p>
                <button className="learn-more mt-4">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Read More</span>
                </button>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card serviceCard mt-3">
                    <figure className="service-reboticon mt-3">
                      <img
                        src={roboAnima}
                        className="card-img-top"
                        alt="roboAnima"
                      />
                    </figure>

                    <div className="card-body">
                      <h5 className="card-title">Robotic Automation</h5>
                      <p className="card-text">
                        Transforming challenges into opportunities with
                        AI-powered robotic automation.
                      </p>
                      <a href="#" className="btn btn-primary">
                      Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card mt-3 serviceCard">
                    <figure className="service-reboticon mt-3">
                      <img
                        src={machineLesrning}
                        className="card-img-top"
                        alt="machineLesrning"
                      />
                    </figure>
                    <div className="card-body">
                      <h5 className="card-title">Machine Learning</h5>
                      <p className="card-text">
                        Innovate, adapt, and evolve with machine learning at the
                        core of your business strategy.4
                      </p>
                      <a href="#" className="btn btn-primary">
                      Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card serviceCard mt-3">
                    <figure className="service-reboticon mt-3">
                      <img
                        src={education}
                        className="card-img-top"
                        alt="education"
                      />
                    </figure>
                    <div className="card-body">
                      <h5 className="card-title">Education &amp; Science</h5>
                      <p className="card-text">
                        Empowering the next generation of thinkers through
                        AI-driven education and scientific discovery.
                      </p>
                      <a href="#" className="btn btn-primary">
                      Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card serviceCard mt-3">
                    <figure className="service-reboticon mt-3">
                      <img
                        src={analysis}
                        className="card-img-top"
                        alt="analysis"
                      />
                    </figure>
                    <div className="card-body">
                      <h5 className="card-title">Predictive Analysis</h5>
                      <p className="card-text">
                        See beyond the horizon with our AI-driven predictive
                        analysis, shaping tomorrow's success today.
                      </p>
                      <a href="#" className="btn btn-primary">
                      Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service_contentbox">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="service-box card box-mb">
                      <figure className="service-reboticon">
                        <img
                          src="./assets/images/service-reboticon.png"
                          alt="Robotic Automation"
                          className="img-fluid"
                        />
                      </figure>
                      <h4>Robotic Automation</h4>
                      <p className="text-size-16 mb-2">
                        Autem vel eum iure reprehea rui in ea volutae velit...
                      </p>
                      <a
                        className="read_more text-decoration-none"
                        href="./service.html"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="box-top">
                      <div className="service-box card box-mb">
                        <figure className="service-learningicon">
                          <img
                            src="./assets/images/service-learningicon.png"
                            alt="Machine Learning"
                            className="img-fluid"
                          />
                        </figure>
                        <h4>Machine Learning</h4>
                        <p className="text-size-16 mb-2">
                          Butem vel eum iure reprehea rui in ea volutae velit...
                        </p>
                        <a
                          className="read_more text-decoration-none"
                          href="./service.html"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="service-box card">
                      <figure className="service-scienceicon">
                        <img
                          src="./assets/images/service-scienceicon.png"
                          alt="Education & Science"
                          className="img-fluid"
                        />
                      </figure>
                      <h4>Education &amp; Science</h4>
                      <p className="text-size-16 mb-2">
                        Eutem vel eum iure reprehea rui in ea volutae velit...
                      </p>
                      <a
                        className="read_more text-decoration-none"
                        href="./service.html"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="box-top">
                      <div className="service-box card">
                        <figure className="service-analysicon">
                          <img
                            src="./assets/images/service-analysicon.png"
                            alt="Predictive Analysis"
                            className="img-fluid"
                          />
                        </figure>
                        <h4>Predictive Analysis</h4>
                        <p className="text-size-16 mb-2">
                          Rutem vel eum iure reprehea rui in ea volutae velit...
                        </p>
                        <a
                          className="read_more text-decoration-none"
                          href="./service.html"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
