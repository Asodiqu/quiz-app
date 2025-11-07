import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig"; // ✅ make sure this path is correct

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
]; // Replace with your own hero images

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // 🕒 Automatically switch background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🚀 Handle “Start Now” button click
  const handleStartNow = () => {
    if (user) {
      navigate("/categories");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden">
      {/* 🔁 Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt="Hero Background"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 opacity-50"></div>
        </motion.div>
      </AnimatePresence>

      {/* 🌟 Decorative animated circles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 w-24 h-24 bg-yellow-300 rounded-full mix-blend-overlay opacity-30 blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-12 w-32 h-32 bg-pink-400 rounded-full mix-blend-overlay opacity-25 blur-2xl"
      ></motion.div>

      {/* ✨ Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6 text-white"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg"
        >
          Challenge Your Mind with{" "}
          <span className="text-yellow-300">Quiz & Selection</span>
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Discover a smarter way to learn. Engage in interactive quizzes,
          compete globally, and unlock your potential with every click.
        </p>

        {/* 🚀 CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={handleStartNow}
            className="inline-flex items-center gap-2 bg-yellow-300 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300"
          >
            Start Now <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>

      {/* 🔮 Bottom soft glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
    </section>
  );
}

export default HeroSection;
