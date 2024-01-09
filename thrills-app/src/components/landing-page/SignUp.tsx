import React from "react";

type SignupHeroData = {
  signupData: {
    name: string, 
    label: string,
    type: string
} []

}


const SignUp = ({signupData} : SignupHeroData) => {
  

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-9">
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
      </div>
      <div className="p-4 flex gap-4">
        <button className="bg-[#F4FE85] text-xs rounded-lg p-1 ">
          Enjoy us!
        </button>
        <button className="bg-[#F4FE85] text-xs rounded-lg p-1">Login</button>
      </div>
    </div>
  );
};

export default SignUp;
