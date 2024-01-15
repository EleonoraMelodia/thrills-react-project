import React from "react";
import video from "../../video/hero-s.mp4";

const VideoSection = () => {
  return (
    <div className="relative overflow-hidden shadow-lg rounded-lg my-4 mx-auto p-4 w-full">
      <video
        className="w-full h-auto block rounded-lg"
        src={video as any}
        autoPlay
        loop
        muted
        controls
        onError={(e) => console.error("Errore nel caricamento del video", e)}
      ></video>
    </div>
  );
};

export default VideoSection;
