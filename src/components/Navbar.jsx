import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Quizzes", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Admin", path: "/admin" },
  ];

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 backdrop-blur-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔰 Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-white tracking-tight"
        >
          Quiz<span className="text-yellow-300">&</span>Selection
        </Link>

        {/* 💻 Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-white font-medium transition duration-300 ${
                  isActive
                    ? "border-b-2 border-yellow-300"
                    : "hover:text-yellow-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* 🔑 Auth Section */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
              >
                <User className="w-6 h-6" />
                <span>{user.displayName || "Account"}</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-yellow-300 text-gray-900 font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300"
            >
              Login / Register
            </Link>
          )}
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📲 Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-b from-indigo-700 via-blue-700 to-purple-800 px-6 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-white text-lg font-medium ${
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <>
              <p className="text-white mt-4">👋 Hi, {user.displayName || "User"}</p>
              <button
                onClick={handleLogout}
                className="block w-full text-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-yellow-300 text-gray-900 font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition-all duration-300"
            >
              Login / Register
            </Link>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
