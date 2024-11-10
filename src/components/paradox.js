import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import FutureSection from "./FutureSection";
import ImageSection from "./ImageSection";
import InspirationSection from "./InspirationSection";

function Paradox() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FutureSection />
      <ImageSection />
      <InspirationSection />
    </div>
  );
}

export default Paradox;
