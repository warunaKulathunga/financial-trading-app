import React from "react";
import chartTwoIcon from "./../../assets/images/chartTwo.png";
import frameIcon from "./../../assets/images/Frame.png";
import "./Chart.css";

const Chart = () => {
  return (
    <div className="chart-section">
      <div className="container">
        <div className="text-center">
          <div className="d-flex gap-2 justify-content-center border align-items-center rounded-5 mx-auto custom-chart-icon">
            <img src={frameIcon} alt="logo" width={14} height={14} />
            <p className="text-white fs-6 fw-lighter m-0">Charting</p>
          </div>
          <h5 className="text-white mt-3 display-5 fw-normal mx-auto chart-sub-text">
            Engage in Trading within a Familiar Environment.
          </h5>
          <p className="text-white mt-3 fs-6 fw-light mx-auto chart-sub-text">
            We have integrated EliteAIgo into our day trading platform. Work
            with all tools and over 100 indicators to analyse and execute
            trades.
          </p>
        </div>
        <div className="card image-bg mt-5">
          <img
            src={chartTwoIcon}
            className="card-img-bottom p-4"
            alt="chartTwoIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
