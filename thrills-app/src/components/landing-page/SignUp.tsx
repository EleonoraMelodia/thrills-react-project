import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/vespa.png";

type SignupHeroData = {
  signupData: {
    name: string;
    label: string;
    type: string;
  }[];
};

const SignUp = ({ signupData }: SignupHeroData) => {
  const [login, setLogin] = useState("hidden");

  const handleLoginClick = () => {
    setLogin((prevLogin) => (prevLogin === "hidden" ? "visible" : "hidden"));
  };

  const handleBackClick = () => {
    setLogin("hidden");
  };

  return (
    <div className="flex flex-col">
      <div
        className={`grid grid-cols-2 gap-9 if ${
          login === "visible" ? "hidden" : "visible"
        }`}
      >
        {signupData.map((options, index) => (
          <form key={index} className="text-sm w-40" action="submit">
            <label className="text-slate-900 flex" htmlFor={options.name}>
              {options.label}
            </label>
            <input
              className="bg-black bg-opacity-80 text-white rounded-lg"
              type={options.type}
              //   id={options.index}
              name={options.name}
              required
            />
          </form>
        ))}

        <div className="p-4 flex gap-4">
          <Link to={"/user"}>
            <button className="bg-[#F4FE85] text-xs rounded-lg p-1 ">
              Enjoy us!
            </button>
          </Link>
          <button
            onClick={handleLoginClick}
            className="bg-[#F4FE85] text-xs rounded-lg p-1"
          >
            Login
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col absolute w-fit h-[30%] rounded-lg bg-slate-900 bg-opacity-90 z-50 left-35 top-[40%] ${login}`}
      >
        <form
          typeof="submit"
          className="grid grid-cols-2  justify-center items-center gap-4 p-8 text-white"
          action="#"
        >
          <label htmlFor="username"> Username </label>
          <input className="rounded-lg" type="text" name="username" />
          <label htmlFor="password"> Password </label>
          <input className="rounded-lg" type="password" name="password" />

          <button className="bg-[#F4FE85] text-black w-[50%] p-1 rounded-2xl ">
            Login
          </button>
          <button
            onClick={handleBackClick}
            className="bg-[#F4FE85] text-black w-[50%] p-1 rounded-2xl "
          >
            Back
          </button>
        </form>
        <img className="w-[200px] " src={img} alt="login image" />
      </div>
    </div>
  );
};

export default SignUp;
