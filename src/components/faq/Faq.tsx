import React, { useState } from "react";
import frameIcon from "./../../assets/images/Frame.png";
import "./Faq.css";

interface FAQItemProps {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active accordion

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion based on index
  };

  const faqItems: FAQItemProps[] = [
    {
      question: "How do I sign up for Era Chart?",
      answer:
        "Click Launch Charts in the header. This will bring you to the login/registration page. If it's your first time here, make an account.. it's free!",
    },
    {
      question: "Is Era Charts free to use?",
      answer:
        "Yes, Era Charts is free to use with basic features. You can access premium features by subscribing to our pro plans.",
    },
    {
      question: "Can I trade directly on Era Charts?",
      answer:
        "No, Era Charts is a tool for charting and analyzing data. For trading, you need to connect to a broker.",
    },
    {
      question: "How secure is my data on Era Charts?",
      answer:
        "We use industry-standard security measures, including encryption and multi-factor authentication, to protect your data.",
    },
    {
      question: "Can I access Era Charts on mobile?",
      answer:
        "Yes, Era Charts is fully responsive and can be accessed from mobile devices via a browser.",
    },
  ];

  return (
    <div className="faq-bg">
      <div className="container p-5">
        <div className="">
          <div className="d-flex gap-2 justify-content-center border align-items-center rounded-5 custom-faq-icon">
            <img src={frameIcon} alt="logo" width={14} height={14} />
            <p className="text-white fs-6 fw-lighter m-0">FAQ</p>
          </div>
          <h6 className="text-white mt-1 display-6 fw-normal chart-sub-text">
            Frequently Asked Questions
          </h6>
          <p className="text-white mt-2 fs-6 fw-light chart-sub-text">
            Here are some of the most common questions that we get.
          </p>
        </div>
        <div
          className="accordion accordion-flush mt-5"
          id="accordionFlushExample"
        >
          {faqItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    activeIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  aria-expanded={activeIndex === index}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span className="ms-auto">
                    {activeIndex === index ? (
                      <i className="bi bi-dash-circle-fill fs-4" />
                    ) : (
                      <i className="bi bi-plus-circle-fill fs-4" />
                    )}
                  </span>
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <div className="accordion-body fw-light">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
