import React from "react";
import Navbar from "../components/nav/Navbar";
import TransparentCard from "../components/bg/TransparentCard";
import "./HeaderSection.css";
import bgImage from "./../assets/images/bg.png";

const HeaderSection = () => {
  return (
    <div
      className="header-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <TransparentCard />
    </div>
  );
};

export default HeaderSection;
