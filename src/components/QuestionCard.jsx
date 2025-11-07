import { motion } from "framer-motion";
import { useState } from "react";

function QuestionCard({ question, options, correctAnswer, onAnswerSelect }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (option) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);

    // Notify parent whether answer is correct
    const isCorrect = option === correctAnswer;
    onAnswerSelect(isCorrect);

    // Let user see color feedback briefly
    setTimeout(() => {
      setSelected(null);
      setAnswered(false);
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 p-6 md:p-8 rounded-2xl shadow-xl border border-indigo-100 relative overflow-hidden"
    >
      {/* Decorative glow */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 right-0 w-40 h-40 bg-indigo-400 blur-3xl rounded-full"
      ></motion.div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">
        {question}
      </h2>

      {/* Options */}
      <div className="space-y-4 relative z-10">
        {options.map((option, i) => {
          const isCorrect = option === correctAnswer;
          const isSelected = option === selected;

          let bg =
            "bg-white hover:bg-indigo-100 border border-gray-200 text-gray-700";
          if (answered) {
            if (isSelected && isCorrect)
              bg = "bg-green-100 border-green-500 text-green-700";
            else if (isSelected && !isCorrect)
              bg = "bg-red-100 border-red-500 text-red-700";
            else if (isCorrect) bg = "bg-green-50 border-green-300 text-green-700";
          }

          return (
            <motion.button
              key={i}
              whileHover={{ scale: answered ? 1 : 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(option)}
              disabled={answered}
              className={`w-full px-5 py-3 rounded-xl font-medium transition-all duration-300 shadow-sm ${bg}`}
            >
              {option}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default QuestionCard;
