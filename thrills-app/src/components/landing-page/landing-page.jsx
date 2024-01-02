import Navbar from "./navbar";

const LandingPage = () => {
  const navArr = ["About us", "Discover more", "Support", "Security", "Download"];
  return (
    <div className="bg-gradient-to-b from-yellow to-purple h-screen">
      <Navbar options={navArr}/>
    </div>
  );
};

export default LandingPage;
