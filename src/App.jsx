import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuizCategories from "./pages/QuizCategories";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import AboutContact from "./pages/AboutContact";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCategories from "./pages/AdminCategories";
import AdminQuestions from "./pages/AdminQuestions";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminSettings from "./pages/AdminSettings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

// ✅ Smooth Page Transition Wrapper
function PageTransitionWrapper({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow pt-20"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// ✅ ProtectedRoute Component
function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        <p className="text-lg text-indigo-700 font-medium animate-pulse">
          Checking authentication...
        </p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 transition-all duration-500">
      {/* 🔝 Elegant Navbar */}
      <Navbar />

      {/* 🧭 Animated Main Content */}
      <PageTransitionWrapper>
        <Routes>
          {/* 🌍 Public Routes */}
          <Route path="/" element={<Home />} />
            <Route path="/categories" element={ 
                <QuizCategories />
               />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/about" element={<AboutContact />} />
            <Route path="/admin" element={<ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>} />
            <Route path="/admin/categories" element={<AdminCategories />} /> {/* ✅ Admin Route */}
             <Route path="/admin/questions" element={<AdminQuestions />} />
             <Route path="/admin/analytics" element={<AdminAnalytics />} />
             <Route path="/admin/settings" element={<AdminSettings />} />
       
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/quiz/:id" element={<QuizPage />} />
          
          {/* 🧠 Protected Quiz Routes */}
          
          
       
        </Routes>
      </PageTransitionWrapper>

      {/* 🔚 Consistent Footer */}
      <Footer />
    </div>
  );
}

export default App;
