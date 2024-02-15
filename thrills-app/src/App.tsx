// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import Download from "./components/landing-page/LP-related/Download";
import AboutUs from "./components/landing-page/LP-related/AboutUs";
import Support from "./components/landing-page/LP-related/Support";
import Security from "./components/landing-page/LP-related/Security";
import DiscoverMore from "./components/landing-page/LP-related/DiscoverMore";
import { UserHome } from "./components/home-page/UserHome";
import LocalGuide from "./components/home-page/local-guide/LocalGuide";

const App = () => {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/download" element={<Download />} />
        <Route path="/discover-more" element={<DiscoverMore />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/security" element={<Security />} />
        <Route path="/user" element={<UserHome />}></Route>
        <Route path="/local" element={<LocalGuide />} />
      </Routes>
    </>
    //routing still to fix.
  );
};

export default App;
