import React from "react";
import links from "./footer.json";
import FooterItems from "./FooterItems";
import logo from "../../../assets/logo-and-theme/Thrills LIGHTMODE.png";


const Footer = () => {
  return (
    <footer className="text-white mt-16 bg-black bg-opacity-50   flex flex-col md:flex-row relative">
      <img className="w-[150px] md:w-[300px] h-auto" src={logo} alt="logo" />
      <div className="flex flex-col gap-10">
        <FooterItems links={links} />
        <div className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-3">
          <span> © 2023 Eleonora Melodia. All rights reserved. </span>
                  <span> Terms | Privacy Policy </span>
                  
        </div>
          </div>
         
    </footer>
  );
};

export default Footer;
