import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/logo-and-theme/b-t-dec.png";
import { useInputContext } from "./InputContext";

type OptionsSidebar = {
  name: string;
  img: string;
  color: string;
}[];

const Sidebar = ({ options }: { options: OptionsSidebar }) => {
 const { input, setInput } = useInputContext();


 const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  return (
    <>
      <div className="flex flex-col gap-2 p-4 w-[40%] h-screen bg-yellow-200 rounded-sm">
        <span className="flex">
          <Link to="/">Main page </Link>
          <img className="w-10" src={img} alt="#" />
        </span>
        <h2>Where is your thrill destination? </h2>

        <input onChange={handleInputChange} type="text" className="p-1 w-[60%] bg-teal-300 rounded-lg" />
        <button> Filters </button>

        <h3>
          Kind of thrill:
          <ul className="grid grid-cols-2  gap-2">
            {options.map((option, index) => (
              <li
                key={index}
                className={`bg-${option.color} p-3 w-28 h-30 rounded-lg shadow-xl flex flex-col justify-center`}
              >
                <a href="#">
                  <img className="w-20" src={option.img} alt="option image" />
                  <span>{option.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 p-4 ">
            <li className="p-2 shadow-lg">
              <a href="">Special Plans</a>
            </li>
            <li className="p-2 shadow-lg">
              <a href=""> Make a gift </a>
            </li>
            <li className="p-2 shadow-lg">
              <a href="">Local Guide</a>
            </li>
            <span className="p-2 shadow-md">
              <Link to="/">Logout</Link>
            </span>
          </ul>
        </h3>
      </div>
    </>
  );
};

export default Sidebar;
