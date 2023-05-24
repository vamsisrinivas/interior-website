import React from "react";
import lottie1 from "../LottieData/work-place.json";
import Lottie from "react-lottie";

// import lottie1 from "../LottieData/1
const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
              {/* <img className="img-fluid" src="img/about.png" alt="" /> */}
              <Lottie options={defaultOptions} />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-inline-block border rounded-pill text-warning px-4 mb-3">
                About Us
              </div>
              <h2 className="mb-4">
                Award Wining Consultancy Agency For Your Business
              </h2>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod
              </p>
              <div className="row g-3 mb-4">
              <div class="col-12 d-flex">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-warning">
                                    <i class="fa fa-user-tie text-white"></i>
                                </div>
                                <div class="ms-4">
                                    <h6>Business Planning</h6>
                                    <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                                </div>
                            </div>
                <div className="col-12 d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-warning">
                    <i className="fa fa-chart-line text-white" />
                  </div>
                  <div className="ms-4">
                    <h6>Financial Analaysis</h6>
                    <span>
                      Tempor erat elitr rebum at clita. Diam dolor ipsum amet
                      eos erat ipsum lorem et sit sed stet lorem sit clita duo
                    </span>
                  </div>
                </div>
              </div>
              <a
                className="btn btn-warning rounded-pill py-3 px-5 mt-2"
                href="/"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default About;
