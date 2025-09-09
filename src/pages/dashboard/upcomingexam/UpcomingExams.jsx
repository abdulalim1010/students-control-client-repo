import React, { useEffect, useState } from "react";
import axios from "axios"; // <-- এইটা add করুন

const UpcomingExams = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/exams")
      .then(res => setExams(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-blue-700">📅 Upcoming Exams</h2>
      {exams.length === 0 ? (
        <p className="text-gray-500">No exams scheduled.</p>
      ) : (
        <ul className="space-y-3">
          {exams.map(exam => (
            <li key={exam._id} className="border p-3 rounded-lg hover:shadow-md transition flex justify-between items-center">
              <div>
                <p className="font-semibold">{exam.subject}</p>
                <p className="text-sm text-gray-500">{new Date(exam.date).toLocaleString()}</p>
                <p className="text-gray-600">{exam.description}</p>
              </div>
              <span className={`px-2 py-1 rounded text-sm font-medium ${
                new Date(exam.date) < new Date() ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
              }`}>
                {new Date(exam.date) < new Date() ? "Past" : "Upcoming"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingExams;
