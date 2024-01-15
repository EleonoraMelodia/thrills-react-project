import VideoSection from "./VideoSection";
import React from "react";

const CentralCard = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 p-16">
        <span className="w-[50%] ">
          <VideoSection />
        </span>

        <div className="w-[20%]">
          <h2 className="font-nanum text-4xl">
            Are you ready to feel your heartbeat?
          </h2>
          <p>
            Thrills is dedicated to those who seek to truly live life to the
            fullest! We aim to make your holidays unforgettable by providing the
            heart-stirring experiences you crave. Explore our offerings and
            choose your preferred city to embark on a journey tailored to your
            desires. Whether you are an adventurer seeking thrilling experiences
            or someone yearning for relaxation in one of the world's most
            amazing spas, Thrills is here for you! Join us and let us enhance
            your holiday with experiences that will stay with you forever.
            Select your city and let the adventure begin!
          </p>
        </div>
      </div>
    </>
  );
};
export default CentralCard;
