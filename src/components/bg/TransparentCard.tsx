import React from "react";
import "./TransparentCard.css";
import frameIcon from "./../../assets/images/Frame.png";

const TransparentCard = () => {
  return (
    <div className="card text-center mx-auto bg-transparent p-5 rounded-5 custom-card">
      <div className="card-body">
        <div className="d-flex gap-2 justify-content-center border align-items-center rounded-5 mx-auto custom-icon">
          <img src={frameIcon} alt="logo" width={14} height={14} />
          <p className="text-white fs-6 fw-lighter m-0">
            Real-Time Market Data
          </p>
        </div>
        <h1 className="card-title text-white mt-3 display-4 fw-medium  title-text">
          Trading Charts Designed for Real Traders.
        </h1>
        <p className="card-text text-white mt-3 fs-6 fw-light">
          Your all-in-one trading platform.
        </p>
        <div className="d-flex flex-column flex-md-row gap-2 justify-content-center mt-4">
          <button className="btn rounded-5 gradient-btn">Start Charting</button>
          <button className="btn rounded-5 bg-transparent border border-gradient-btn">
            Join Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransparentCard;
