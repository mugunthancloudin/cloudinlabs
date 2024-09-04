import React from "react";
import "./home.css";
import bannerImg from "../../../assets/home/banner-image.png";

export default function Home() {
  return (
    <>
      <div className="container-fluid homebg">
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-6">
              <h1 className="homeH1">
                Bring Force of <br></br> Artificial Intelligence To Business
              </h1>
              <h5 className="homeP">
                Revolutionize your operations with cutting-edge AI solutions
                that drive innovation, efficiency, and growth. From data
                analytics to intelligent automation, our AI-powered services are
                designed to meet your unique business challenges.
              </h5>
              <div className="row">
                <button className="learn-more mt-5 ms-3">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Read More</span>
                </button>

                <button className="learn-more mt-5 ms-3">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Contact Us</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={bannerImg} alt="bannerImg" className="homeRobo mb-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
