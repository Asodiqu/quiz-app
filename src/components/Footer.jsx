import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white py-10 mt-10 shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-extrabold mb-3">
            Quiz<span className="text-yellow-300">&</span>Selection
          </h1>
          <p className="text-gray-200 text-sm leading-relaxed">
            Empowering learners with interactive quizzes and smart evaluations.
            Join our platform to test, learn, and grow with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-yellow-300">
            Quick Links
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-yellow-300 transition">
                Quizzes
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-yellow-300 transition">
                Admin
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-yellow-300">
            Connect With Us
          </h2>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-yellow-300 transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <Twitter />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <Instagram />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <Linkedin />
            </a>
          </div>
          <p className="text-gray-200 text-sm">
            📧 support@quizselection.com <br />
            📍 Kwara State University, Nigeria
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-400 mt-8 pt-4 text-center text-sm text-gray-200">
        <p>
          © {new Date().getFullYear()} Quiz & Selection Platform. All Rights
          Reserved.
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="h-1 bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 mt-3 rounded-full"
        ></motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
