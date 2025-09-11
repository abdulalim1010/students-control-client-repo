import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../pages/login/UseAuth";

const Navbar = () => {
  const { user, logOut } = UseAuth();

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left Logo + Mobile Menu Button */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">
          🎓 Students Toolkit
        </Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li>
            {user ? (
              <button onClick={logOut} className="text-red-600 font-semibold">
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>

      {/* Right side Login/Logout */}
      <div className="hidden lg:flex">
        {user ? (
          <button
            onClick={logOut}
            className="btn btn-sm bg-red-600 text-white font-semibold hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm bg-blue-800 text-white font-semibold hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
