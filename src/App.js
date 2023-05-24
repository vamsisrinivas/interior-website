import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Client from "./Components/Client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Service from "./Components/Service";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Testimonial from "./Components/Testimonial";
import Projects from "./Components/Projects";

function App() {

  return (
    // <div className="container-xxl bg-white p-0">
    <>
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-warning"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      

      {/* <Header/>
      <Home/>
      <About/>
      <Service/>
      <Features/>
      <Client/>
      <Testimonial/>
      <Footer/> */}
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/client" element={<Client/>} />
      <Route path="/testimonials" element={<Testimonial/>} />
      <Route path="/contactus" element={<ContactUs/>} />
    
    
      </Routes>
       <Footer/>
      </BrowserRouter>
     
      </>
  );
}

export default App;
