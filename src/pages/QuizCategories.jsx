import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 9, // ✅ Open Trivia category ID
    title: "General Knowledge",
    description: "Test your everyday knowledge across multiple subjects.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 17,
    title: "Science & Tech",
    description: "Challenge your understanding of modern science and innovation.",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 19,
    title: "Mathematics",
    description: "Sharpen your problem-solving skills with engaging math questions.",
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 18,
    title: "Programming",
    description: "Test your coding logic and algorithmic thinking in fun quizzes.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 23,
    title: "History & Culture",
    description: "Explore important events and world heritage knowledge.",
    color: "from-red-500 to-rose-600",
  },
  {
    id: 21,
    title: "Sports",
    description: "Show off your knowledge of athletes, rules, and great matches.",
    color: "from-cyan-500 to-blue-500",
  },
];

function QuizCategories() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-6">
      {/* 🌟 Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700">
          Choose Your <span className="text-purple-600">Quiz Category</span>
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Pick a topic and start testing your knowledge instantly!
        </p>
      </motion.div>

      {/* 💫 Category Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className={`relative rounded-2xl shadow-lg text-white bg-gradient-to-br ${category.color} p-6 overflow-hidden`}
          >
            {/* ✨ Floating Glow */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-0 w-24 h-24 bg-white opacity-10 blur-3xl rounded-full"
            ></motion.div>

            {/* 🧠 Category Info */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
              <p className="text-sm text-gray-100 mb-5">
                {category.description}
              </p>

              {/* 🚀 Start Button */}
              <Link
                to={`/quiz/${category.id}`}
                className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
              >
                Start Quiz
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔮 Decorative gradient bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-indigo-200/60 to-transparent"></div>
    </section>
  );
}

export default QuizCategories;
