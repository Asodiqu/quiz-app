import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SubmitProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    photo: "",
    link: "",
    description: "",
  });

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing projects or create empty array
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];

    // Add new project
    const updatedProjects = [...existingProjects, formData];

    // Save updated list
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    // Navigate to /projects page
    navigate("/projects");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-blue-600">LinkedKids</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
        </div>
      </nav>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-12">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Submit Your Project
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl w-full max-w-md p-8 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="text"
            name="photo"
            placeholder="Project Photo URL"
            value={formData.photo}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="url"
            name="link"
            placeholder="Project Link (GitHub, Website, etc.)"
            value={formData.link}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Project
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 border-t mt-8">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} LinkedKids. Built for young innovators.
        </p>
      </footer>
    </div>
  );
}

export default SubmitProject;
