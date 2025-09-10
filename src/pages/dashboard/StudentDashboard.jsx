import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Authcontext } from "../login/authcotext/Authcontext";

const StudentDashboard = () => {
  const { user, logOut } = useContext(Authcontext);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5 space-y-4">
        <h2 className="text-2xl font-bold">🎓 Dashboard</h2>
        <ul className="space-y-3 mt-6">
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/exams">Upcoming Exams</Link></li>
          <li><Link to="/dashboard/attendance">Attendance</Link></li>
          <li><Link to="/dashboard/fees"> Fees</Link></li>
          <li><Link to="/dashboard/notifications">Notifications</Link></li>
          <li>
            <button
              onClick={logOut}
              className="text-red-300 hover:text-red-500"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Profile Info */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex items-center gap-4">
          <img
            src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"}
            alt="Profile"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h1 className="text-2xl font-bold">
              Welcome, {user?.displayName || "Student"}
            </h1>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        {/* এখানে child route দেখাবে */}
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
