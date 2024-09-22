import React from "react";
import frameIcon from "./../../assets/images/Frame.png";
import "./Faq.css";

const Faq = () => {
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
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How do I sign up for Era Chart?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fw-light">
                Click Launch Charts in the header. This will bring you to the
                login/registration page. If it's your first time here, make an
                account.. it's free!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Is Era Charts free to use?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fw-light">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the second item's accordion body. Let's imagine this being
                filled with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Can I trade directly on Era Charts?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fw-light">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Can I trade directly on Era Charts?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fw-light">
                Click Launch Charts in the header. This will bring you to the
                login/registration page. If it's your first time here, make an
                account.. it's free!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                How secure is my data on Era Charts?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fw-light">
                Click Launch Charts in the header. This will bring you to the
                login/registration page. If it's your first time here, make an
                account.. it's free!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Can I access Era Charts on mobile?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fw-light">
                Click Launch Charts in the header. This will bring you to the
                login/registration page. If it's your first time here, make an
                account.. it's free!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
