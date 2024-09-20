import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import HeaderSection from "./pages/HeaderSection";
import Features from "./components/features/Features";
import Chart from "./components/chat/Chart";
import Trading from "./components/trading/Trading";

function App() {
  return (
    <>
      <HeaderSection />
      <div className="main-bg-color">
        <Features />
        <Chart />
        <Trading />
      </div>
      <Footer />
    </>
  );
}

export default App;
