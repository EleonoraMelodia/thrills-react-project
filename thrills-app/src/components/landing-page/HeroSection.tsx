import React from "react";
import imgHero from "../../assets/logo-and-theme/hero-sec.jpg";
import img from "../../assets/logo-and-theme/cow2.png";
import Authentication from "./authentication/Authentication";

const HeroSection = () => {
  const dataArr = [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "surname",
      label: "Surname",
      type: "text",
    },
    {
      name: "city",
      label: "City",
      type: "text",
    },
    {
      name: "date",
      label: "Your birthday",
      type: "date",
    },
    {
      name: "email",
      label: "E-mail",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "repeatPassword",
      label: "Repeat password",
      type: "password",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-2 mt-[7%] p-10">
      <div className="flex flex-col w-full relative">
        <img
          className=" w-full h-[100%] md:w-[100%] p-4  "
          src={imgHero}
          alt="main landing page img"
              />
              <div className="flex justify-center"> <h2 className=" font-nanum text-white text-xl  bg-black bg-opacity-50 ">
          This is Carl, and his heart thrills every day from 1952!
        </h2></div>
        
      </div>

      <div className="flex flex-col gap-0 mt-2">
        <span className="flex font-nanum text-5xl ">
          <h2>Sign up and let yourself be kidnapped by an emotion! </h2>
          <img className=" absolute right-1 w-44" src={img} alt="sign up image" />
        </span>

        <Authentication signupData = {dataArr} />
      </div>
    </div>
  );
};

export default HeroSection;
