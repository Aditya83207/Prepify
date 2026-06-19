import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="sticky top-0 bg-white shadow-md h-15">
      <div className="max-w-7xl mx-auto px-0 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="InterviewPrepAI Logo"
            className="h-15 w-45 object-contain"
          />


        </Link>

        {/* Links */}
        <div className="flex gap-8 text-lg">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/practice" className={navLinkClass}>
            Practice
          </NavLink>

          <NavLink to="/aptitude" className={navLinkClass}>
            Aptitude
          </NavLink>

          <NavLink to="/mock-interview" className={navLinkClass}>
            Mock Interview
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;