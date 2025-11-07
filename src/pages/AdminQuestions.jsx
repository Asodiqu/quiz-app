import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { motion } from "framer-motion";

function AdminQuestions() {
  // ✅ Sample Questions List
  const [questions, setQuestions] = useState([
    { id: 1, question: "Which programming language runs in a web browser?", category: "Programming" },
    { id: 2, question: "Which company developed React?", category: "Frontend" },
    { id: 3, question: "Tailwind CSS is primarily used for?", category: "Design" },
  ]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 lg:ml-64">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8"
        >
          📝 Manage Questions
        </motion.h1>

        {/* Questions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl shadow-md">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Question</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id} className="border-b hover:bg-indigo-50 transition-all">
                  <td className="py-3 px-6">{q.id}</td>
                  <td className="py-3 px-6">{q.question}</td>
                  <td className="py-3 px-6">{q.category}</td>
                  <td className="py-3 px-6 flex gap-3">
                    <button className="bg-yellow-400 text-white px-3 py-1 rounded-md shadow hover:bg-yellow-500 transition">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New Question */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
        >
          + Add New Question
        </motion.button>
      </div>
    </div>
  );
}

export default AdminQuestions;
