import React from "react";
import "./Footer.css";
import xIcon from "./../../assets/images/x.png";
import instaIcon from "./../../assets/images/insta.png";
import inIcon from "./../../assets/images/in.png";
import disIcon from "./../../assets/images/dis.png";

const Footer = () => {
  return (
    <div className="b-color">
      <div className="container text-center p-5">
        <div className="row">
          <div className="col mt-4 mt-sm-0">
            {/* <img
              src={`${process.env.PUBLIC_URL}/Logo.png`}
              alt="logo"
              className="logo-image"
            /> */}
            <p className="text-white fw-bold fs-5">Logo</p>
            <p className="fs-6 mt-2 text-start sub-text max-width-item fs-6 fw-light">
              The Premier Charting Service Creating the Future of Trading.
            </p>
            <div className="d-flex   gap-3">
              <img src={xIcon} alt="logo" className="social-icon" />
              <img src={instaIcon} alt="logo" className="social-icon" />
              <img src={inIcon} alt="logo" className="social-icon" />
              <img src={disIcon} alt="logo" className="social-icon" />
            </div>
          </div>
          <div className="col text-start mt-4 mt-sm-0">
            <h5 className="text-white">Solutions</h5>
            <p className="sub-text fs-6 fw-light">Brokers</p>
            <p className="sub-text fs-6 fw-light">Prop firms</p>
            <p className="sub-text fs-6 fw-light">Broker Platform</p>
            <p className="sub-text fs-6 fw-light">Broker Portal</p>
          </div>
          <div className="col text-start mt-4 mt-sm-0">
            <h5 className="text-white">Company</h5>
            <p className="sub-text fs-6 fw-light">Roadmap</p>
            <p className="sub-text fs-6 fw-light">Support</p>
            <p className="sub-text fs-6 fw-light">Shop</p>
            <p className="sub-text fs-6 fw-light">Reviews</p>
            <p className="sub-text fs-6 fw-light">Press</p>
            <p className="sub-text fs-6 fw-light">Privacy Policy</p>
            <p className="sub-text fs-6 fw-light">Terms & Conditions</p>
          </div>
          <div className="col text-start mt-4 mt-sm-0">
            <h5 className="text-white">Platform</h5>
            <p className="sub-text fs-6 fw-light">Trading</p>
            <p className="sub-text fs-6 fw-light">Charting</p>
            <p className="sub-text fs-6 fw-light">Usability</p>
            <p className="sub-text fs-6 fw-light">Studio</p>
            <p className="sub-text fs-6 fw-light">Demo</p>
            <p className="sub-text fs-6 fw-light">Partners</p>
            <p className="sub-text fs-6 fw-light">API</p>
          </div>
          <div className="col text-start mt-4 mt-sm-0">
            <h5 className="text-white">Resources</h5>
            <p className="sub-text fs-6 fw-light">How To</p>
            <p className="sub-text fs-6 fw-light">Blog</p>
            <p className="sub-text fs-6 fw-light">Glossary</p>
            <p className="sub-text fs-6 fw-light">Economic Calendar</p>
            <p className="sub-text fs-6 fw-light">Slides</p>
          </div>
        </div>
        <div className="row mt-4 mt-sm-0">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <p className="sub-text fs-6 fs-6 fw-light">
              Copyright © 2024 Era Charts, AI Rights Reserved.
            </p>
            <p className="sub-text fs-6 fs-6 fw-light">
              Terms & Conditions . Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
