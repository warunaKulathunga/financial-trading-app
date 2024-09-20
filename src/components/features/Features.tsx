import React from "react";
import frameIcon from "./../../assets/images/Frame.png";
import chartIcon from "./../../assets/images/chart.png";
import marketIcon from "./../../assets/images/market.png";
import customizableIcon from "./../../assets/images/layout.png";
import communityIcon from "./../../assets/images/community.png";
import "./Features.css";

const Features = () => {
  return (
    <div className="feature-section">
      <div className="container">
        <div>
          <div className="d-flex gap-2 justify-content-center border align-items-center rounded-5 py-2  custom-icon-feature">
            <img src={frameIcon} alt="logo" width={14} height={14} />
            <p className="text-white fs-6 fw-lighter m-0">Features</p>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between mt-4 mt-sm-2">
            <p className="text-white display-6 fw-normal ">
              Powerful Features for Traders.
            </p>
            <button className="btn rounded-5 gradient-feature-btn mt-2 mt-sm-0">
              Learn More
            </button>
          </div>
          <p className="text-white fs-6 fw-light feature-sentence mt-4 mt-sm-0">
            Explore the key features that make Era Chart the ultimate trading
            platform
          </p>
        </div>
        <div className="card-group gap-3 mt-4 mt-sm-0">
          <div className="card p-4 rounded-4 custom-feature-card">
            <img
              src={chartIcon}
              className="mx-auto"
              alt="chartIcon"
              width={60}
              height={60}
            />
            <div className="card-body mt-2">
              <h5 className="card-title text-white text-center">
                Advanced Charting Tools
              </h5>
              <p className="card-text feature-sub-text text-center fs-5 fw-lighter">
                Access a wide range of technical analysis tools for in-depth and
                trading analysis
              </p>
            </div>
          </div>
          <div className="card p-4 rounded-4 custom-feature-card">
            <img
              src={marketIcon}
              className="mx-auto"
              alt="marketIcon"
              width={60}
              height={60}
            />
            <div className="card-body mt-2">
              <h5 className="card-title text-white text-center">
                Real-Time Market Data
              </h5>
              <p className="card-text text-center feature-sub-text fs-5 fw-lighter">
                Stay updated with live market data and make informed trading
                decisions
              </p>
            </div>
          </div>
          <div className="card p-4 rounded-4 custom-feature-card">
            <img
              src={customizableIcon}
              className="mx-auto"
              alt="customizableIcon"
              width={60}
              height={60}
            />
            <div className="card-body">
              <h5 className="card-title text-white text-center">
                Customizable Layouts
              </h5>
              <p className="card-text text-center feature-sub-text fs-5 fw-lighter">
                Tailor your trading workspace to suit your preferences and
                trading style
              </p>
            </div>
          </div>
          <div className="card p-4 rounded-4 custom-feature-card">
            <img
              src={communityIcon}
              className="mx-auto"
              alt="communityIcon"
              width={60}
              height={60}
            />
            <div className="card-body">
              <h5 className="card-title text-white text-center">
                Social Trading Community
              </h5>
              <p className="card-text text-center feature-sub-text fs-5 fw-lighter">
                Connect with other traders, share insights, and learn form the
                community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
