import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaLayerGroup,
  FaQuestionCircle,
  FaChartLine,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/admin" },
    { name: "Categories", icon: <FaLayerGroup />, path: "/admin/categories" },
    { name: "Questions", icon: <FaQuestionCircle />, path: "/admin/questions" },
    { name: "Analytics", icon: <FaChartLine />, path: "/admin/analytics" },
    { name: "Settings", icon: <FaUserCog />, path: "/admin/settings" },
  ];

  return (
    <div className="relative flex">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-5 left-5 z-50 p-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-all"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-64 bg-gradient-to-b from-indigo-700 to-purple-800 min-h-screen text-white shadow-xl p-6 fixed lg:static z-40 flex flex-col justify-between"
          >
            {/* Brand Logo */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center select-none">
                🧠 Quiz<span className="text-yellow-300">Master</span>
              </h2>

              {/* Menu Links */}
              <nav className="space-y-2">
                {menuItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-white text-indigo-700 shadow-md"
                          : "hover:bg-indigo-600"
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Logout Button */}
            <div className="mt-10 border-t border-indigo-500 pt-4">
              <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all text-sm font-medium">
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminSidebar;
