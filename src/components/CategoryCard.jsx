import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CategoryCard({ id, title, description, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay || 0, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className={`relative rounded-2xl shadow-lg text-white bg-gradient-to-br ${color} p-6 overflow-hidden`}
    >
      {/* ✨ Floating Glow */}
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-0 left-0 w-24 h-24 bg-white opacity-10 blur-3xl rounded-full"
      ></motion.div>

      {/* 🧠 Category Info */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-100 mb-5">{description}</p>

        {/* 🚀 Start Button */}
        <Link
          to={`/quiz/${id}`}
          className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Start Quiz
        </Link>
      </div>
    </motion.div>
  );
}

export default CategoryCard;
