import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
// import lottie1 from "../LottieData/103782-interior-frame-decor.json";
import lottie2 from "../LottieData/interior-design.json";
import About from "./About";
import Service from "./Service";
import Features from "./Projects";
import Client from "./Client";
import ContactUs from "./ContactUs";
import Projects from "./Testimonial";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
    <div className="container-xxl hero-header">
      <div className="container-fuild">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="text-green mb-4 animated zoomIn">
              We Help To Push Your Business To The Top Level
            </h1>
            <p className="text-green pb-3 animated zoomIn">
              Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
              dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
              sit justo amet ipsum vero ipsum clita lorem
            </p>
            <Link
              to="/"
              className="btn btn btn-warning rounded-pill border-2 py-3 px-5 animated slideInRight"
            >
              Learn More
            </Link>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            {/* <img
                  className="img-fluid animated zoomIn"
                  src="./img/hero.png"
                 
                  alt=""
                /> */}
            <Lottie options={defaultOptions}  height={500}
        width={500} />
          </div>
        </div>
      </div>
    </div>
    <About/>
    <Service/>
   <Features/>
   <Client/>
   <Projects/>
   <ContactUs/>
    </>
  );
};

export default Home;
