import React from "react";
import frameIcon from "./../../assets/images/Frame.png";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="container pricing-section">
      <div className="text-center pricing-details-section">
        <div className="d-flex gap-2 justify-content-center border align-items-center rounded-5 mx-auto custom-chart-icon">
          <img src={frameIcon} alt="logo" width={14} height={14} />
          <p className="text-white fs-6 fw-lighter m-0">Pricing</p>
        </div>
        <h5 className="text-white py-2 display-6 fw-medium mx-auto pricing-sub-text">
          Select Your Plan & Get Access to Era Charts
        </h5>
        <p className="text-white px-2 fs-6 fw-light mx-auto pricing-sub-text">
          Choose your plan today and gain instant access to exclusive,
          high-quality signals designed to give you a competitive trading edge.
        </p>
      </div>
      <div className="card-group mt-5">
        <div className="card p-3 mt-0 mt-md-5 price-card-height pricing-card">
          <div className="card-body">
            <h5 className="card-title text-white fs-6 fw-normal">Starter</h5>
            <p className="card-text mt-4 fs-6 fw-light monthly-card-subtext">
              Everything you need to supercharge your productivity.
            </p>
            <div className="d-flex gap-2">
              <h3 className="text-white display-6 fw-medium">Free</h3>
            </div>
            <div className="mt-2 d-flex justify-content-center border-middle">
              <span className="badge fs-6 fw-normal px-3 py-2 transparent-pricing-badge">
                Free
              </span>
            </div>
            <div className="mb-3">
              <p className="text-white fs-6 fw-normal mt-4">What’s included</p>
              <div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">2 Charts</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">3 Free Indicators</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">
                    Basic Functionality
                  </p>
                </div>
              </div>
            </div>
            <button className="btn rounded-5 mt-2 gradient-pricing-btn mt-5">
              Subscribe
            </button>
          </div>
        </div>
        <div className="card p-3 mt-5 mt-sm-0 pricing-card ">
          <div className="card-body">
            <h5 className="card-title text-white fs-3 fw-bold">Monthly</h5>
            <p className="card-text mt-4 fs-6 fw-light monthly-card-subtext">
              Unlock a new level of your personal productivity.
            </p>
            <div className="d-flex gap-2">
              <h3 className="text-white display-6 fw-medium">$24.95</h3>
              <div className="d-flex flex-column justify-content-center ms-2">
                <span className="badge rounded-4 px-3 py-2 badge-bg">-20%</span>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center border-middle">
              <span className="badge fs-6 fw-normal px-3 py-2 transparent-pricing-badge">
                All Included
              </span>
            </div>
            <div className="mb-3">
              <p className="text-white fs-6 fw-normal mt-4">What’s included</p>
              <div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">Unlimited Charts</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">Unlimited Alerts</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">
                    Unlimited Watchlists
                  </p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">
                    Unlimited Indicators
                  </p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">
                    All Premiun Indicators
                  </p>
                </div>
              </div>
            </div>
            <button className="btn rounded-5 mt-2 gradient-pricing-btn mt-5">
              Subscribe
            </button>
          </div>
        </div>
        <div className="card p-3 mt-5 price-card-height pricing-card">
          <div className="card-body">
            <h5 className="card-title text-white fs-6 fw-normal">Yearly</h5>
            <p className="card-text mt-4 fs-6 fw-light monthly-card-subtext">
              Everything you need to supercharge your productivity.
            </p>
            <div className="d-flex gap-2">
              <h3 className="text-white display-6 fw-medium">$149.95</h3>
            </div>
            <div className="mt-2 d-flex justify-content-center border-middle">
              <span className="badge fs-6 fw-normal px-3 py-2 transparent-pricing-badge">
                $204
              </span>
            </div>
            <div className="mb-3">
              <p className="text-white fs-6 fw-normal mt-4">What’s included</p>
              <div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">2 Charts</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">3 Free Indicators</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle check-icon" />
                  <p className="text-white fs-6 fw-light">
                    Basic Functionality
                  </p>
                </div>
              </div>
            </div>
            <button className="btn rounded-5 mt-2 gradient-pricing-btn mt-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
