import { motion } from "framer-motion";
import { FaEnvelope, FaTwitter, FaGithub, FaPhoneAlt } from "react-icons/fa";

function AboutContact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl max-w-5xl w-full p-10 border border-indigo-100"
      >
        {/* 💡 About Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold text-center text-indigo-700 mb-8"
        >
          About <span className="text-purple-600">QuizMaster</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-700 leading-relaxed text-center mb-10"
        >
          QuizMaster is a fun and interactive platform designed to help learners
          test and enhance their knowledge through engaging quizzes.  
          Whether you’re preparing for exams, learning new skills, or just
          having fun, our goal is to make learning enjoyable and effective for
          everyone!
        </motion.p>

        {/* ✉️ Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 p-8 rounded-2xl shadow-inner text-center"
        >
          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-6">
            Have questions, suggestions, or feedback? We’d love to hear from you!
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-indigo-600 text-lg">
            <motion.a
              href="mailto:asodiqu@quizmaster.com"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white/80 shadow-md px-4 py-2 rounded-xl hover:bg-indigo-100 transition-all"
            >
              <FaEnvelope /> Asodiqu@quizmaster.com
            </motion.a>

            <motion.a
              href="tel:+123 9032483438"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white/80 shadow-md px-4 py-2 rounded-xl hover:bg-indigo-100 transition-all"
            >
              <FaPhoneAlt /> +234 9032483438
            </motion.a>

            <motion.a
              href="https://twitter.com/asodiqu_1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white/80 shadow-md px-4 py-2 rounded-xl hover:bg-indigo-100 transition-all"
            >
              <FaTwitter /> @Asodiqu
            </motion.a>

            <motion.a
              href="https://github.com/asodiqu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white/80 shadow-md px-4 py-2 rounded-xl hover:bg-indigo-100 transition-all"
            >
              <FaGithub /> github.com/Asodiqu
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutContact;
