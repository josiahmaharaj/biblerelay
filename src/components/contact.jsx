import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="container px-5">
      <h1>Contact</h1>
      <p>For more information please feel free to contact us</p>
      <div className="row">
        <div className=" col-1 text-center">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="col-11">
          <a href="mailto:tziongatelifecentre.tglcm@gmail.com">
            tziongatelifecentre.tglcm@gmail.com
          </a>
        </div>
      </div>
      <br />
      <div className="row">
        <div className=" col-1 text-center">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className="col-11">
          <a href="tel:+18683806713" className="pr-5">
            1 868 380 6713
          </a>
          <a href="tel:+18683538128">1 868 353 8128</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
