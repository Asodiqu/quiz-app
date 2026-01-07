// src/pages/Home.jsx
import React from 'react';
import HeroSection from "../components/HeroSection";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      

      {/* Hero Section */}
       <div className="text-center">
      <HeroSection />
    </div>

      
    </div>
  );
}

export default Home;
Home.jsx