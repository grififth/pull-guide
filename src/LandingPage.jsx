import React, { useState, useEffect } from "react";
import LandingHero from "./components/LandingHero";
import LandingInsurance from "./components/LandingInsurance";
import LandingFooter from "./components/LandingFooter";
import LandingScroll from "./components/LandingScroll";
import LandingQuotes from "./components/LandingQuotes";

const LandingPage = () => {
  return (
    <div className="landing">
      <LandingHero />
      <LandingScroll />
      <LandingInsurance />
      <LandingQuotes />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
