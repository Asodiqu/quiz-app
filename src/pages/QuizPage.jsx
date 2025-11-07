import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import QuestionCard from "../components/QuestionCard";

function QuizPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // 🧭 category ID from URL

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch quiz questions dynamically with retry + timeout
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // ⏱️ 10s timeout

    const fetchQuestions = async (retry = false) => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=5&category=${id}&type=multiple`,
          { signal: controller.signal }
        );

        // Retry if no questions found
        if (!response.data.results.length) {
          if (!retry) {
            console.warn("Empty category, retrying with general knowledge...");
            return fetchQuestions(true); // Retry once with fallback
          } else {
            throw new Error("No questions available in this category.");
          }
        }

        const formattedQuestions = response.data.results.map((q, index) => ({
          id: index + 1,
          question: decodeHTML(q.question),
          options: shuffleArray([
            ...q.incorrect_answers.map((ans) => decodeHTML(ans)),
            decodeHTML(q.correct_answer),
          ]),
          correct: decodeHTML(q.correct_answer),
        }));

        setQuestions(formattedQuestions);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions:", err);
        if (axios.isCancel(err)) {
          setError("⏱️ Request timed out. Please try again.");
        } else {
          setError("❌ Failed to load quiz. Please try again.");
        }
        setLoading(false);
      } finally {
        clearTimeout(timeout);
      }
    };

    // Fetch with a small delay for smoother UX
    const delay = setTimeout(() => fetchQuestions(), 400);

    return () => {
      controller.abort();
      clearTimeout(timeout);
      clearTimeout(delay);
    };
  }, [id]);

  // 🔤 Decode HTML entities
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  // 🔀 Shuffle options
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // 🧩 Handle answer selection
  const handleAnswerSelect = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        navigate("/result", {
          state: {
            score: isCorrect ? score + 1 : score,
            total: questions.length,
          },
        });
      }
    }, 900);
  };

  // 🔁 Restart quiz without reloading page
  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setQuestions((prev) =>
      prev.map((q) => ({
        ...q,
        options: shuffleArray([...q.options]),
      }))
    );
  };

  const progress = questions.length
    ? ((current + 1) / questions.length) * 100
    : 0;

  // 🌀 Loading State
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        <p className="text-lg text-indigo-700 font-medium animate-pulse">
          Loading quiz...
        </p>
      </div>
    );

  // ⚠️ Error State
  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 text-center px-4">
        <p className="text-lg text-red-600 font-semibold mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 text-white px-5 py-2 rounded-full font-medium hover:bg-red-700 transition"
        >
          🔄 Try Again
        </button>
      </div>
    );

  // ✅ Quiz Content
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12 px-4">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-indigo-100">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8"
        >
          🧠 Interactive Quiz
        </motion.h1>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8 }}
          className="h-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full mb-6 shadow-md"
        ></motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={questions[current].id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
          >
            <QuestionCard
              question={questions[current].question}
              options={questions[current].options}
              correctAnswer={questions[current].correct}
              onAnswerSelect={handleAnswerSelect}
            />
          </motion.div>
        </AnimatePresence>

        {/* Restart Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleRestart}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-indigo-700 transition"
          >
            🔁 Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
