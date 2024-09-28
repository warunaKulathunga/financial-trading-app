import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
        <div className="container">
          {/* <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="logo" /> */}
          <p className="text-white fw-bold fs-5">Logo</p>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="sidebar offcanvas offcanvas-start bg-black"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header border-bottom">
              {/* <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="logo" /> */}
              <p className="text-white fw-bold fs-5">Logo</p>
              <button
                type="button"
                className="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-center align-items-center fs-6 flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mx-2 ">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="/features">
                    Features
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>

              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                <ul className="navbar-nav justify-content-end flex-grow-1 fs-6">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="/">
                          Sinhala
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Tamil
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <button className="btn rounded-5 gradient-btn">
                  Launch Chart
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
