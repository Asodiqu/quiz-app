import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import AdminSidebar from "../components/AdminSidebar";

function AdminAnalytics() {
  // 📊 Sample data
  const weeklyData = [
    { name: "Mon", users: 400, quizzes: 240 },
    { name: "Tue", users: 300, quizzes: 139 },
    { name: "Wed", users: 500, quizzes: 450 },
    { name: "Thu", users: 278, quizzes: 390 },
    { name: "Fri", users: 189, quizzes: 480 },
    { name: "Sat", users: 239, quizzes: 380 },
    { name: "Sun", users: 349, quizzes: 430 },
  ];

  const monthlyData = [
    { name: "Jan", users: 1200, quizzes: 800 },
    { name: "Feb", users: 2100, quizzes: 1300 },
    { name: "Mar", users: 1800, quizzes: 1100 },
    { name: "Apr", users: 2500, quizzes: 1600 },
    { name: "May", users: 2000, quizzes: 1400 },
  ];

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
          className="text-3xl md:text-4xl font-bold text-indigo-700 mb-10"
        >
          📊 Analytics Dashboard
        </motion.h1>

        {/* Weekly Activity Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            📈 Weekly Users & Quizzes
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="quizzes" stroke="#f43f5e" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Monthly Activity Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            📊 Monthly Users & Quizzes
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#4f46e5" />
              <Bar dataKey="quizzes" fill="#f43f5e" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminAnalytics;
