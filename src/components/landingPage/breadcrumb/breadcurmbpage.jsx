import React from "react";
import "./breadcrumb.css";
import roboHand from "../../../assets/breadcurms/sub-bannerimage.png";
import Breadcrumbs from "./breadcrumb";
import { useLocation } from "react-router-dom";

export default function Breadcurmbpage() {

    const location = useLocation();
    const pageTitle = location.state?.title || "Default Title"; 
    console.log(location);
    
    console.log(pageTitle);
    

  return (
    <>
      <div className="container-fluid sub-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="banner_content aos-init aos-animate"
                data-aos="fade-right"
              >
                  <h1>{pageTitle}</h1>
                <h1 className="breadcrumbH1">Contact Us</h1>
                <p className="text-white">
                  Huis autem vel eum iure reprehenderit aui in ea voluptate
                  velit esse ruam nihil molestiae conseuatur.
                </p>
                <div className="box">
                    <Breadcrumbs/>
                  {/* <span className="mb-0">Home</span>
                  <i className="first fa-regular fa-angle-right"></i>
                  <i className="second fa-regular fa-angle-right"></i>
                  <span className="mb-0 box_span">Contact</span> */}
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

//   return (
//     <section className="banner-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-7 col-md-6 col-sm-12 col-12">

//           </div>
//           <div className="col-lg-5 col-md-6 col-sm-12 col-12">
//             <div className="banner_wrapper">
//               <figure className="mb-0 sub-bannerimage">
//                 <img src="./assets/images/sub-bannerimage.png" alt="Sub Banner" className="" />
//               </figure>
//             </div>
//           </div>
//         </div>
//       </div>
//       <figure className="sub-bannersideshape2 mb-0">
//         <img src="./assets/images/sub-bannersideshape2.png" alt="Side Shape" className="img-fluid" />
//       </figure>
//     </section>
//   );
