import React from "react";
import "./breadcrumb.css";
import roboHand from "../../../assets/breadcurms/sub-bannerimage.png";
import Breadcrumbs from "./breadcrumb";
import { useLocation } from "react-router-dom";

export default function Breadcurmbpage() {
  const location = useLocation();

  // Fallback for pageTitle if state is null
  const fallbackTitle = location.pathname.split("/").filter((x) => x)[0];
  const pageTitle =
    location.state?.title ||
    fallbackTitle.charAt(0).toUpperCase() + fallbackTitle.slice(1) ||
    "Home";

  console.log("Location object:", location);
  console.log("Page Title in Breadcrumbpage:", pageTitle);

  return (
    <>
      <div className="container-fluid sub-banner">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div
                className="banner_content aos-init aos-animate"
                data-aos="fade-right"
              >
                <h1 className="breadcrumbH1">{pageTitle}</h1>
                <p className="text-white mt-4">
                  We strive to deliver exceptional service, ensuring
                  satisfaction and addressing every need with utmost care.
                </p>
                <div className="box">
                  <Breadcrumbs />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={roboHand} alt="roboHand" className="roboHand" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
