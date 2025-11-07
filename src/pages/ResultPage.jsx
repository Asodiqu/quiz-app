import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScoreSummary from "../components/ScoreSummary";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Retrieve quiz data from navigation state
  const { score = 0, total = 0 } = location.state || {};

  // 🌀 Handle Restart or Return actions
  const handleRestart = () => navigate("/categories");

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-6 relative overflow-hidden">
      {/* 🌈 Floating gradient glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-tr from-pink-300 to-purple-400 blur-3xl rounded-full opacity-50"
      ></motion.div>

      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 w-48 h-48 bg-gradient-to-tr from-blue-300 to-indigo-400 blur-3xl rounded-full opacity-50"
      ></motion.div>

      {/* 🏆 Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-10 z-10"
      >
        🎯 Your Quiz Results
      </motion.h1>

      {/* 🧮 Score Summary Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <ScoreSummary score={score} total={total} onRestart={handleRestart} />
      </motion.div>

      {/* 🎬 Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 z-10"
      >
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/categories")}
          className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Choose Another Quiz
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Go to Home
        </motion.button>
      </motion.div>

      {/* 🔮 Bottom decorative glow */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-indigo-200/60 to-transparent"></div>
    </section>
  );
}

export default ResultPage;
