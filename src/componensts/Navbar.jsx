import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-md px-4">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">
          🎓 Students Toolkit
        </Link>
      </div>

      {/* Centered Links */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Join Button */}
      <div className="flex-none">
        <button className="btn btn-primary btn-sm">Join</button>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex-none lg:hidden ml-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tools">Tools</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><button className="btn btn-primary btn-sm mt-2 w-full">Join</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
