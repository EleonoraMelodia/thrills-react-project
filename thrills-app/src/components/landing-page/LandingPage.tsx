import "bootstrap/dist/css/bootstrap.min.css";
import slides from "../../slides.json";
import React from "react";

import CarouselEvents from "./Carousel";
import CentralCard from "./CentralCard";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import fire from "../../assets/fire1-1.png";
import Footer from "./footer/Footer";

const LandingPage = () => {
  const navArr = [
    {
      name:"About us" ,
      path: "/about-us"
    },
    {
      name:  "Discover more" ,
      path: "/discover-more"
    },
    {
      name: "Support" ,
      path: "/support"
    },
    {
      name:"Security" ,
      path: "/security"
    },
    {
      name:"Download" ,
      path: "/download"
    }
  ];


  
  return (
    <div className="flex-col bg-gradient-to-b from-yellow to-purple h-full">
      <Navbar options={navArr} />
      <HeroSection />
      <CentralCard />
      <span className="flex relative flex-row justify-center text-center items-center">
        <h2 className="text-center text-4xl font-nanum text-white ">
          Highlighted events and experiences this month
          <img className="w-[30px]  inline-block m-1" src={fire} alt="fire" /> :
        </h2>
      </span>
      <CarouselEvents slides={slides} />
      <Footer/>
    </div>
  );
};

export default LandingPage;
