import { motion } from "framer-motion";
import {
  FaUsers,
  FaClipboardList,
  FaLayerGroup,
  FaTrophy,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  // 📊 Sample chart data
  const data = [
    { name: "Mon", users: 400, quizzes: 240 },
    { name: "Tue", users: 300, quizzes: 139 },
    { name: "Wed", users: 200, quizzes: 980 },
    { name: "Thu", users: 278, quizzes: 390 },
    { name: "Fri", users: 189, quizzes: 480 },
    { name: "Sat", users: 239, quizzes: 380 },
    { name: "Sun", users: 349, quizzes: 430 },
  ];

  const stats = [
    { icon: <FaUsers />, label: "Active Users", value: "1,245", color: "from-blue-500 to-indigo-600" },
    { icon: <FaClipboardList />, label: "Total Quizzes", value: "320", color: "from-pink-500 to-rose-600" },
    { icon: <FaLayerGroup />, label: "Categories", value: "12", color: "from-green-500 to-emerald-600" },
    { icon: <FaTrophy />, label: "Top Score", value: "98%", color: "from-yellow-400 to-orange-500" },
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
          📊 Admin Dashboard
        </motion.h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`p-6 bg-gradient-to-r ${stat.color} text-white rounded-2xl shadow-lg flex items-center gap-4`}
            >
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <p className="text-sm opacity-90">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            📈 Weekly User & Quiz Activity
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#4f46e5"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="quizzes"
                stroke="#f43f5e"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminDashboard;
