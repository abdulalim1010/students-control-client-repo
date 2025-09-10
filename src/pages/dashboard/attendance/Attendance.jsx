import axios from "axios";
import React, { useEffect, useState } from "react";


const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/attendance")
      .then(res => setAttendance(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">📊 Attendance Record</h2>

      {attendance.length === 0 ? (
        <p className="text-gray-500">No attendance records available.</p>
      ) : (
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Student ID</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record._id}>
                <td className="px-4 py-2 border">
                  {new Date(record.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border">{record.studentId}</td>
                <td className={`px-4 py-2 border font-semibold ${
                  record.status === "Present"
                    ? "text-green-600"
                    : "text-red-600"
                }`}>
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Attendance;
