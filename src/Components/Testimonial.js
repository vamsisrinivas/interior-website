import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
  

const Testimonial = () => {
  

 
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <div className="d-inline-block border rounded-pill text-warning px-4 mb-3">
            Testimonial
          </div>
          <h2 className="mb-5">What Our Clients Say!</h2>
        </div>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="./img/team-1.jpg" alt="" />
          <div className="myCarousel border rounded-pill">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="./img/team-2.jpg" alt="" />
          <div className="myCarousel border rounded-pill">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="./img/team-3.jpg" alt="" />
          <div className="myCarousel border rounded-pill">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>

          </div>
        </div>
        
  
  );
};



export default Testimonial;
