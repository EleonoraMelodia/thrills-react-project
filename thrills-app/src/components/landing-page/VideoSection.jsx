import video from "../../video/hero-s.mp4";

const VideoSection = () => {
  return (
    <video
      className="rounded-sm"
      src={video}
      autoPlay
      loop
      muted
      controls
      onError={(e) => console.error("Errore nel caricamento del video", e)}
    ></video>
  );
};

export default VideoSection;
