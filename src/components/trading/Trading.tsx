import React from "react";
import tradingIcon from "./../../assets/images/tradingChart.png";
import tradingIconTwo from "./../../assets/images/smallTradingChart.png";
import frameIcon from "./../../assets/images/Frame.png";
import "./Trading.css";

const Trading = () => {
  return (
    <div className="container">
      <div className="card p-5 trading-card">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <div className="d-flex gap-2 justify-content-center border align-items-center rounded-5 custom-chart-icon">
                <img src={frameIcon} alt="logo" width={14} height={14} />
                <p className="text-white fs-6 fw-lighter m-0">Trading</p>
              </div>
              <h5 className="card-title text-white mt-3 display-6 fw-medium trading-text">
                Utilize Model-based Trading Features.
              </h5>
              <p className="card-text text-white fs-6 fw-light mt-4 trading-text">
                Upgrade your day trading game with Era Chart' comprehensive
                suite of tools designed to help both novice and experienced
                users make quick and accurate market decisions.
              </p>
              <button className="btn rounded-5 gradient-btn mt-2">
                Start Charting
              </button>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <img
              src={tradingIcon}
              className="img-fluid rounded-start"
              alt="tradingIcon"
            />
            <img
              src={tradingIconTwo}
              className="img-fluid rounded-start position-absolute d-none d-xxl-block small-icon"
              alt="tradingIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
