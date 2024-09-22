import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import HeaderSection from "./pages/HeaderSection";
import Features from "./components/features/Features";
import Chart from "./components/chat/Chart";
import Trading from "./components/trading/Trading";
import Pricing from "./components/pricing/Pricing";
import Testimonial from "./components/testimonial/Testimonial";
import Faq from "./components/faq/Faq";

function App() {
  return (
    <>
      <HeaderSection />
      <div className="main-bg-color">
        <Features />
        <Chart />
        <Trading />
        <Pricing />
      </div>
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
