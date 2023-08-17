import React from "react";
import Header from "./Header";
import Imgsliding from "./Imgsliding";
import Product from "./Product";
import About from "./About";

import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="sticky-top">
        <Header />
      </div>
      <Imgsliding />
      <Product />
      
      
      <div id="about">
        <About />
      </div>

      
     
      

      <div id="cont">
        <Footer />
        </div>
    </div>
  );
};

export default Home;
