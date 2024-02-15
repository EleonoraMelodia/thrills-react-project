// LocalGuide.js
import React from "react";

import "./local.css";
import FormLocal from "./Form";


const LocalGuide = () => {
  return (
    <div className="localcontainer  ">
      <div className="flex p-8 "></div>

      <div className="h-screen flex justify-center p-4 ">
        <FormLocal />
      </div>
    </div>
  );
};

export default LocalGuide;
