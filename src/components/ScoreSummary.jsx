import { motion } from "framer-motion";

function ScoreSummary({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const isExcellent = percentage >= 80;
  const isGood = percentage >= 50 && percentage < 80;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-indigo-100 max-w-lg mx-auto"
    >
      {/* 🎉 Animated Header */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4"
      >
        🎉 Quiz Completed!
      </motion.h2>

      {/* 🧮 Score Circle */}
      <motion.div
        className="relative flex justify-center items-center mx-auto w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-center">
          <p className="text-5xl font-extrabold">{percentage}%</p>
          <p className="text-sm font-medium">Score</p>
        </div>
      </motion.div>

      {/* 💬 Feedback Message */}
      <p
        className={`text-lg font-semibold mb-4 ${
          isExcellent
            ? "text-green-600"
            : isGood
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        {isExcellent
          ? "Excellent! You’re a quiz master! 🌟"
          : isGood
          ? "Good effort! You’re almost there 👍"
          : "Keep practicing and try again 💪"}
      </p>

      {/* 📊 Score Summary */}
      <div className="text-gray-700 mb-6">
        <p>
          You answered{" "}
          <span className="font-bold text-indigo-700">{score}</span> out of{" "}
          <span className="font-bold text-purple-700">{total}</span> questions
          correctly.
        </p>
      </div>

      {/* 🔁 Restart Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all"
      >
        Restart Quiz
      </motion.button>
    </motion.div>
  );
}

export default ScoreSummary;
