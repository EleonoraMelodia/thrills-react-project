import React from "react";
import imgHero from "../../assets/hero-sec.jpg";
import SignUp from "./SignUp";
import img from "../../assets/cow.png";

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
          className="w-full h-full md:w-[100%] p-4  "
          src={imgHero}
          alt="main landing page img"
              />
              <div className="flex justify-center"> <h2 className=" font-nanum text-white text-xl  bg-black bg-opacity-50 ">
          This is Carl, and his heart thrills every day from 1952!
        </h2></div>
        
      </div>

      <div>
        <span className="flex font-nanum text-5xl ">
          <h2>Sign up and let yourself be kidnapped by an emotion! </h2>
          <img className="w-[24%]" src={img} alt="sign up image" />
        </span>

        <SignUp signupData = {dataArr} />
      </div>
    </div>
  );
};

export default HeroSection;
