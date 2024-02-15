import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/experiences");
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []); // Empty dependency array to run only once

  return (
    <div className="p-10 font-semibold">
       
          {experiences && experiences.map((item : any, index) => (
            <div className="flex justify-center md:ms-2 h-70 " key={index}>
              <div className="relative max-w-sm overflow-hidden bg-white rounded-xl custom-box-shadow">
                <div className="py-4 w-full bg-gradient-to-t from-[#fbf7f7] to-[#140426] relative">
                
                  <img
                    className="p-5 mx-auto card-review-img"
                    src={item.img}
                    alt="Immagine della card"
                  />
                </div>

                <div className="flex-col justify-center px-6 py-3 ">
                  <div className="h-[100px] flex-col mb-5">
                    <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
                    
                    <p className="text-base text-gray-700">{item.location}</p>
                  </div>

                  <div className="flex-col justify-center px-6 pt-4">
                    <button className="bg-indigo-200 w-[100%] p-4 bg- rounded-3xl  hover:bg-[#966ab2] hover:text-white ;">
                      
                     
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
   
      </div>
 
  );
};
  
export default AboutUs;
