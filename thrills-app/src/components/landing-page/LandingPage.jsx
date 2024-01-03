import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const LandingPage = () => {
  const navArr = [
    "About us",
    "Discover more",
    "Support",
    "Security",
    "Download",
  ];
  return (
    <div className="flex-col bg-gradient-to-b from-yellow to-purple h-full">
      <Navbar options={navArr} />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
