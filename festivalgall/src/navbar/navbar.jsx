import { useNavigate } from "react-router-dom";

export default function Navbar() {
//   const navigate = useNavigate(); // ✅ Now navigate is defined

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    navigate("/login"); // ✅ This will now work correctly
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#060c16] text-white shadow-md shadow-blue-500/20">
      {/* Left Logo */}
      <h1 className="text-lg font-semibold">SkillX</h1>

      {/* Center Navigation */}
      <div className="flex items-center space-x-6 bg-black/20 px-6 py-2 rounded-full shadow-sm shadow-blue-400/20 hover:shadow-blue-500/40 transition-all duration-300">
        <a
          href="/admin/courses/allcourses"
          className="text-white rounded-full px-4 py-2 hover:bg-black/30 transition"
        >
          Courses
        </a>
        <a
          href="/admin/courses/create"
          className="text-white rounded-full px-4 py-2 hover:bg-black/30 transition"
        >
          Add Course
        </a>
        <a
          href="/admin/courses/test/createtest"
          className="text-white rounded-full px-4 py-2 hover:bg-black/30 transition"
        >
          Add Test
        </a>
        <a
          href="/admin/courses/attendance"
          className="text-white rounded-full px-4 py-2 hover:bg-black/30 transition"
        >
          Mark Attendance
        </a>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="text-white rounded-full px-4 py-2 hover:bg-black/30 transition"
        >
          Logout
        </button>
      </div>

      {/* Right Side Button (Duplicate Logout Removed) */}
      <button
        onClick={handleLogout}
        className="bg-black/20 text-white px-6 py-2 rounded-full hover:bg-black/30 shadow-sm shadow-blue-400/20 hover:shadow-blue-500/40 transition-all duration-300"
      >
        Log out
      </button>
    </nav>
  );
}
