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

      {/* Footer */}
      <footer className="text-center py-6 border-t mt-12">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} LinkedKids. Built for young innovators.
        </p>
      </footer>
    </div>
  );
}

export default Home;
Home.jsx