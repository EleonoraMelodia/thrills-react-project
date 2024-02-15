import React from "react";
import SearchingBar from "./SearchingBar";

type ExperiencesLocalGuide = {
  city: string;
  name: string;
  rew: string;
}[];

const Reviews = () => {
  // Local reviews to be kept in the component
  const localExperiences: ExperiencesLocalGuide = [
    {
      city: "Amsterdam",
      name: "Charlie",
      rew: "A really beautiful city.....",
    },
    { city: "Amsterdam", name: "Charlie", rew: "Don't like..." },
    { city: "Barcelona", name: "Charlie", rew: "A really beautiful city....." },
    { city: "Berlin", name: "Scott", rew: "A really beautiful city....." },
    {
      city: "Bruxells",
      name: "Guendalina",
      rew: "A really beautiful city.....",
    },
  ];

  return (
    <div className="p-10 ">
      {/* Pass the local experiences to the SearchingBar component */}
      <SearchingBar localExperiences={localExperiences} />
    </div>
  );
};

export default Reviews;
