// SearchingBar.tsx
import React, { ChangeEvent, useRef, useState } from "react";

type ExperiencesLocalGuide = {
  city: string;
  name: string;
  rew: string;
}[];

const SearchingBar = ({
  localExperiences,
}: {
  localExperiences: ExperiencesLocalGuide;
}) => {
  const cityRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col gap-28">
      <input
        className="bg-[yellow] rounded-lg p-2 "
        onChange={handleInputChange}
        type="text"
        ref={cityRef}
      />

      {localExperiences.map((experience, index) =>
        input.toLowerCase().includes(experience.city.toLowerCase()) ? (
          <div className="flex flex-col  justify-center gap-3" key={index}>
            <h3>{experience.name} says: </h3>
            <p>{experience.rew}</p>
          </div>
        ) : (
          <React.Fragment key={index} />
        )
      )}
    </div>
  );
};

export default SearchingBar;
