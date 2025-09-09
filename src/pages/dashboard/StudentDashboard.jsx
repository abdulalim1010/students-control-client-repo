import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5 space-y-4">
        <h2 className="text-2xl font-bold">🎓 Dashboard</h2>
        <ul className="space-y-3 mt-6">
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/exams">Upcoming Exams</Link></li>
          <li><Link to="/dashboard/attendance">Attendance</Link></li>
          <li><Link to="/dashboard/fees">Tuition Fees</Link></li>
          <li><Link to="/dashboard/notifications">Notifications</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome, Student!</h1>

        {/* Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">📅 Upcoming Exams</h2>
            <p>Math Exam - 15 Sep, 10:00 AM</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">📊 Attendance</h2>
            <p>Present: 85%</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">💰 Tuition Fees</h2>
            <p>Due: $200</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">🔔 Notifications</h2>
            <p>No new alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
