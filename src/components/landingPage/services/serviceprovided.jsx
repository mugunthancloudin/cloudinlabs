import React from "react";
import featureData from "./features.json";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './service.css';  // Import the custom CSS file

export default function Serviceprovided() {
  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="row text-center">
          <h1 className="serviceprovidedH1">Why Choose Us</h1>
          <p className="serviceprovidedP">
            With years of industry experience and a passion for driving online
            success, we are committed to helping businesses thrive in the
            digital landscape.
          </p>
        </div>

        <div className="row mt-3">
          {featureData.map((feature) => (
            <div key={feature.id} className="col-md-3">
              <div className="card box-small-icon feature-4">
                <div className="icon-circle">
                  <i className={`fa ${feature.icon}`}></i>
                </div>
                <div className="cont">
                  <h3 className="icon-title">{feature.title}</h3>
                  <div className="icon-text">
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
