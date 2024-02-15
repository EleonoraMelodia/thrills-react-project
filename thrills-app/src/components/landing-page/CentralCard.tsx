import VideoSection from "./VideoSection";
import React from "react";

const CentralCard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 md:p-16">
        <span className="w-full md:w-[50%]">
          <VideoSection />
        </span>

        <div className="w-screen p-3  md:w-[20%] md:p-0">
          <h2 className="font-nanum text-4xl">
            Are you ready to feel your heartbeat?
          </h2>
          <p>
            Thrills is dedicated to those who seek to truly live life to the
            fullest! We aim to make your holidays unforgettable by providing the
            heart-stirring experiences you crave. Explore our offerings and
            choose your preferred city to embark on a journey tailored to your
            desires.
            Select your city and let the adventure begin!
          </p>
        </div>
      </div>
    </>
  );
};
export default CentralCard;
