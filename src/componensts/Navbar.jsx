import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../pages/login/UseAuth";


const Navbar = () => {
  const { user, logOut } =UseAuth()

  return (
    <div className="navbar flex justify-between bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">🎓 Students Toolkit</Link>
      </div>

      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>

      <div className="flex-none">
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
