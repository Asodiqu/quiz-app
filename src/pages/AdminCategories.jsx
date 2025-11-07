import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";

function AdminCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "JavaScript", quizzes: 12 },
    { id: 2, name: "Python", quizzes: 8 },
    { id: 3, name: "C Programming", quizzes: 10 },
  ]);

  const [newCategory, setNewCategory] = useState("");

  // ✅ Add a new category
  const handleAddCategory = () => {
    if (newCategory.trim() === "") return;
    setCategories([
      ...categories,
      { id: Date.now(), name: newCategory, quizzes: 0 },
    ]);
    setNewCategory("");
  };

  // 🗑️ Delete a category
  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-10 lg:ml-64 transition-all duration-300">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8"
        >
          🗂️ Manage Categories
        </motion.h1>

        {/* Add New Category Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-6 mb-8"
        >
          <h2 className="text-lg font-semibold mb-4 text-indigo-600">
            ➕ Add New Category
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter category name..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button
              onClick={handleAddCategory}
              className="flex items-center justify-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
            >
              <FaPlus /> Add
            </button>
          </div>
        </motion.div>

        {/* Category List Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold mb-4 text-indigo-600">
            📋 Existing Categories
          </h2>

          {categories.length === 0 ? (
            <p className="text-gray-500 italic">No categories found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-100 text-indigo-700 text-left">
                    <th className="p-3 font-semibold">#</th>
                    <th className="p-3 font-semibold">Category Name</th>
                    <th className="p-3 font-semibold">Quizzes</th>
                    <th className="p-3 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat, index) => (
                    <tr
                      key={cat.id}
                      className="border-b hover:bg-indigo-50 transition"
                    >
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3 font-medium text-gray-700">
                        {cat.name}
                      </td>
                      <td className="p-3 text-gray-600">{cat.quizzes}</td>
                      <td className="p-3 flex justify-center gap-3">
                        <button className="p-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition">
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(cat.id)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default AdminCategories;
