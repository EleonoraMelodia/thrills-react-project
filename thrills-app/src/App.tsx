import React from "react";
import LandingPage from "./components/landing-page/LandingPage";
import { Route, Routes } from "react-router-dom";
import Download from "./components/landing-page/LP-related/Download";
import AboutUs from "./components/landing-page/LP-related/AboutUs";
import Support from "./components/landing-page/LP-related/Support";
import Security from "./components/landing-page/LP-related/Security";
import DiscoverMore from "./components/landing-page/LP-related/DiscoverMore";
import { UserHome } from "./components/home-page/UserHome";


const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user" element={<UserHome />} />
      <Route path = "/download" element= {< Download/>} />
      <Route path = "/discover-more" element= {< DiscoverMore/>} />
      <Route path = "/about-us" element= {< AboutUs/>} />
      <Route path = "/support" element= {< Support/>} />
      <Route path = "/security" element= {< Security/>} />
    </Routes>

  </>
}

export default App;
