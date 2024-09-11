import React from "react";
import "./whatsapp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Lottie from "lottie-react";
import roboScroll from "../../../assets/whatsapp/whatsappLotie.json";

export default function Whatsapp() {

  const handleClick = () => {
    window.location.href = "https://wa.me/9842984247"; // Redirects to a specific WhatsApp chat
  };
  return (
    <>
      {/* <button className="whatsapp" onClick={handleClick}>
        <Lottie options={defaultOptions} height={400} width={400} />
        <span className="fa fa-whatsapp " id="btn-vibrate" />
      </button> */}


      <div>
          <Lottie
            animationData={roboScroll}
            loop={true}
            autoplay={true}
            onClick={handleClick}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "0px",
              height: "150px",
              cursor: "pointer",
              transition: "opacity 0.3s, visibility 0.3s",
            }}
            className="mt-3"
          />
        </div>
    </>
  );
}
