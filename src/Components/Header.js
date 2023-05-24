import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          {/* <h1 className="m-0">Harsha Interiors</h1> */}
          <img src="./img/2.png" style={{height:"50%"}} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Service
            </Link>
            <Link to="/projects" className="nav-item nav-link">
              Projects
            </Link>
            <Link to="/testimonials" className="nav-item nav-link">
              Testimonial
            </Link>
            {/* <div className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/feature" className="dropdown-item">
                  Features
                </Link>
                <Link to="/quote" className="dropdown-item">
                  Free Quote
                </Link>
                <Link to="/team" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="/404" className="dropdown-item">
                  404 Page
                </Link>
              </div>
            </div> */}
            <Link to="/contactus" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          {/* <Link
            to="/"
            className="btn btn-light rounded-pill text-warning py-2 px-4 ms-lg-5"
          >
            Free Quote
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
