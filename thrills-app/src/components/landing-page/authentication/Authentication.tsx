import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/vespa.png";

type SignupHeroData = {
  signupData: {
    name: string;
    label: string;
    type: string;
  }[];
};

const Authentication = ({ signupData }: SignupHeroData) => {
  const [login, setLogin] = useState("hidden");
  const [password, setPassword] = useState("");
  const [inputs, setInputs] = useState(false);
  const [redirectToUser, setRedirectToUser] = useState(false);

  const navigate = useNavigate();

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value ? setInputs(true) : setInputs(false);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputs) {
      alert("all fields are required!");
    } else if (!isPasswordValid) {
      alert("password not valid");
    } else {
      navigate("/user");
    }
  };
  //verifing password validity
  const handlePasswordChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const isPasswordValid = () => {
    const upperCaseRage = /[A-Z]/;
    const numberRage = /[0-9]/;
    const specialChart = /[!@#$%^&*(),.?":{}|<>]/;
    return (
      upperCaseRage.test(password) &&
      numberRage.test(password) &&
      specialChart.test(password)
    );
  };

  //handle the button login, for the visualize of the login form
  const handleLoginClick = () => {
    setLogin((prevLogin) => (prevLogin === "hidden" ? "visible" : "hidden"));
  };

  //redirect the login to user Home, already missing of the authentication with real datas
  const handleLoggingInClick = () => {
    navigate("/user")
  }

  // hide the login form
  const handleBackClick = () => {
    setLogin("hidden");
  };

  return (
    <div className="flex flex-col bg-opacity-50 p-4 rounded-md ">
      <div
        className={`grid grid-cols-2 gap-9 if ${
          login === "visible" ? "hidden" : "visible"
        }`}
      >
        <form className="text-sm w-40" action="#" method="POST">
          {signupData.map((options, index) => (
            <div className=" grid grid-cols-2 gap-36 p-2" key={index}>
              <label className="text-slate-900 flex" htmlFor={options.name}>
                {options.label}
              </label>
              <input
                onChange={handleInputsChange}
                className="bg-black bg-opacity-80 p-1 w-48 h-7  text-white rounded-lg"
                type={options.type}
                //   id={options.index}
                name={options.name}
                required
              />
            </div>
          ))}

          <div className="p-4 flex gap-16">
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="bg-[#F4FE85] text-sm font-extrabold rounded-lg p-2"
            >
              Enjoy us!
            </button>

            <button
              onClick={handleLoginClick}
              className="bg-[#F4FE85] text-sm font-extrabold w-20 rounded-lg p-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      <div
        className={`flex flex-col absolute p-2 w-fit h-[30%] rounded-lg bg-black bg-opacity-50 z-50 left-35 top-[40%] ${login}`}
      >
        <form
          typeof="submit"
          className="grid grid-cols-2  justify-center items-center gap-4 p-8 text-white"
          action="#"
        >
          <label htmlFor="email"> E-mail </label>
          <input
            className="rounded-lg text-xs p-1 text-slate-900"
            type="email"
            name="email"
            placeholder="ex. mario-bianchi@gmail.com"
            required
          />
          <label htmlFor="password"> Password </label>
          <input
            className="rounded-lg text-xs p-1 text-slate-900"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            required
          />
          <div className="flex gap-4">
            <button onClick={handleLoggingInClick} className="bg-[#F4FE85] text-black  p-2 rounded-xl ">
              Login
            </button>
            <button
              onClick={handleBackClick}
              className="bg-[#F4FE85] text-black  p-2 rounded-xl "
            >
              Back
            </button>
          </div>
        </form>
        <img className="w-[200px] absolute top-20 right-3 " src={img} alt="login image" />
      </div>
    </div>
  );
};

export default Authentication;
