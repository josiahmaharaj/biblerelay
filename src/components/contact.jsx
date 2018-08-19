import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="container px-5">
      <div className="row">
        <div className="col-12 col-sm-6">
          <h1>Contact Tzion Gate</h1>
          <p>
            For more information please feel free to contact us at Tzion Gate
          </p>
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
        <div className="col-12 col-sm-6">
          <h1>Contact TWEC</h1>
          <p>For more information please feel free to contact us as TWEC</p>
          <div className="row">
            <div className=" col-1 text-center">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="col-11">
              <a href="mailto:hello@trueworshippers.org">
                hello@trueworshippers.org
              </a>
            </div>
          </div>
          <br />
          <div className="row">
            <div className=" col-1 text-center">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="col-11">
              <a href="tel:+18686423402" className="pr-5">
                1 868 642 3402
              </a>
            </div>
          </div>
          <br />
          <div className="row">
            <div className=" col-1 text-center">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="col-11">
              <a href="https://www.facebook.com/twectt" className="pr-5">
                fb/twectt
              </a>
            </div>
          </div>
          <br />
          <div className="row">
            <div className=" col-1 text-center">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div className="col-11">
              <a href="https://trueworshippers.org" className="pr-5">
                trueworshippers.org
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <h1>Contact Light Tech Services Ltd.</h1>
          <p>For more information please contact Light Tech</p>
          <div className="row">
            <div className=" col-1 text-center">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="col-11">
              <a href="tel+18686859976">1 868 685 9976</a>
            </div>
          </div>
          <br />
          <div className="row">
            <div className=" col-1 text-center">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="col-11">
              <a
                href="https://www.facebook.com/Light-Tech-Services-Limited-303973349672794"
                target="blank"
                rel="noopener noreferrer"
              >
                fb/Light-Tech-Services-Limited
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
