import React from "react";
import star from "./../../assets/images/Star.png";
import avatar from "./../../assets/images/Avatar.png";
import frameIcon from "./../../assets/images/Frame.png";
import circle from "./../../assets/images/Ellipse.png";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-bg-color">
      <div className="container">
        <div className="d-flex justify-content-between flex-column flex-md-row p-3">
          <div className="mt-5">
            <div className="d-flex gap-2 justify-content-center border align-items-center rounded-5 custom-testimonial-icon">
              <img src={frameIcon} alt="logo" width={14} height={14} />
              <p className="text-white fs-6 fw-lighter m-0">Testimonial</p>
            </div>
            <h5 className="text-white display-6 fw-normal mt-3 pricing-sub-text">
              Real Traders, Real Stories
            </h5>
            <p className="text-white fs-6 fw-light mt-3 pricing-sub-text">
              Choose your plan today and gain instant access to exclusive,
              high-quality signals designed to give you a competitive trading
              edge.
            </p>
          </div>
          <div className="pe-4 p-0 p-md-5">
            <div className="circle-container">
              <img
                src={avatar}
                alt="avatar"
                className="avatar-icon-test test-icon-child-one"
              />
              <img
                src={avatar}
                alt="avatar"
                className="avatar-icon-test test-icon-child-two"
              />
              <img
                src={avatar}
                alt="avatar"
                className="avatar-icon-test test-icon-child-three"
              />
              <div className="manual-circle d-flex justify-content-center align-items-center test-icon-child-four">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
            <div className="d-flex gap-2 p-4 p-md-0">
              <i className="bi bi-star-fill text-white"></i>
              <p className="text-white fs-6 fw-light">
                <b className="fw-medium ">4.9</b> (700 Reviews)
              </p>
            </div>
          </div>
        </div>
        <div className="card-group gap-3 p-3">
          <div className="card rounded-4 p-4 testimonial-card">
            <div className="card-body">
              <img src={star} className="star-icon" alt="star" />
              <p className="card-text text-white fs-5 fw-light mt-4">
                I have been trading Forex for over 10+ years. Era Chart exactly
                allows me to see the market faster and confirm entries / exits
                and it's amazing! The technical support and especially the
                discord channel are amazing. The creators of the pr...
              </p>
              <div className="d-flex align-items-center gap-3 mt-2">
                <img src={avatar} alt="avatar" className="avatar-icon" />
                <div className="mt-3">
                  <p className="fs-6 fw-medium text-white m-0">Steve Manning</p>
                  <p className="fs-6 fw-light text-white">Businessman</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-4 p-4 testimonial-card">
            <div className="card-body">
              <img src={star} className="star-icon" alt="star" />
              <p className="card-text text-white fs-5 fw-light mt-4">
                I have been trading Forex for over 10+ years. Era Chart exactly
                allows me to see the market faster and confirm entries / exits
                and it's amazing! The technical support and especially the
                discord channel are amazing. The creators of the pr...
              </p>
              <div className="d-flex align-items-center gap-3 mt-2">
                <img src={avatar} alt="avatar" className="avatar-icon" />
                <div className="mt-3">
                  <p className="fs-6 fw-medium text-white m-0">Steve Manning</p>
                  <p className="fs-6 fw-light text-white">Businessman</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-4 p-4 testimonial-card">
            <div className="card-body">
              <img src={star} className="star-icon" alt="star" />
              <p className="card-text text-white fs-5 fw-light mt-4">
                I have been trading Forex for over 10+ years. Era Chart exactly
                allows me to see the market faster and confirm entries / exits
                and it's amazing! The technical support and especially the
                discord channel are amazing. The creators of the pr...
              </p>
              <div className="d-flex align-items-center gap-3 mt-2">
                <img src={avatar} alt="avatar" className="avatar-icon" />
                <div className="mt-3">
                  <p className="fs-6 fw-medium text-white m-0">Steve Manning</p>
                  <p className="fs-6 fw-light text-white">Businessman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center mt-3">
          <div className="arrow-left-circle d-flex justify-content-center align-items-center">
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="arrow-right-circle d-flex justify-content-center align-items-center">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
