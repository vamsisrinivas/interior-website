import React from 'react'

const Projects = () => {
  return (
    <div className="container-xxl py-6">
   
    <div className="container">
    <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          // style={{ maxWidth: 600 }}
        >
      <div className="d-inline-block border rounded-pill text-warning px-4 mb-3">
           Our Projects
          </div>
    {/* <p>Welcome to my portfolio! Below are some of the projects I have worked on.</p> */}
    <div className="row  ">
      <div className="col-lg-4 col-md-6 mb-4  ">
        <div className="card h-100 card text-center ">
          <div className="card-body">
          <img src="./img/team-1.jpg" className="card-img-top mx-auto d-inline-block border rounded-pill" alt=""/>
           
          </div>
          <div className="card-footer">
            <a href="/" className="btn btn-warning">View More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100 card text-center">
          <div className="card-body">
          <img src="./img/team-2.jpg"  className="card-img-top mx-auto d-inline-block border rounded-pill" alt=""/>
          </div>
          <div className="card-footer">
            <a href="/" className="btn btn-warning">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100 card text-center">
          <div className="card-body">
          <img src="./img/team-3.jpg"  className="card-img-top mx-auto d-inline-block border rounded-pill" alt=""/>
          </div>
          <div className="card-footer">
            <a href="/" className="btn btn-warning">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100 card text-center">
          <div className="card-body">
          <img src="./img/team-3.jpg"  className="card-img-top mx-auto d-inline-block border rounded-pill" alt=""/>
          </div>
          <div className="card-footer">
            <a href="/" className="btn btn-warning">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100 card text-center">
          <div className="card-body">
          <img src="./img/team-2.jpg"  className="card-img-top mx-auto d-inline-block border rounded-pill" alt=""/>
          </div>
          <div className="card-footer">
            <a href="/" className="btn btn-warning">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100 card text-center">
          <div className="card-body">
          <img src="./img/team-1.jpg"  className="card-img-top mx-auto d-inline-block border rounded-pill" alt=""/>
          </div>
          <div className="card-footer">
            <a href="/" className="btn btn-warning">Learn More</a>
          </div>
        </div>
      </div>
      </div>
      </div>
     
    </div>
  </div>
  )
}

export default Projects
