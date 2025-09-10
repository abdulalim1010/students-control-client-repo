// Fees.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Fees = () => {
  const [fees, setFees] = useState([]);
  const [selectedFee, setSelectedFee] = useState(null);
  const [semester, setSemester] = useState("");
  const [session, setSession] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
  axios
    .get("http://localhost:3000/api/fees")
    .then(res => {
      console.log(res.data);   // এটা ঠিক আছে, debug এর জন্য
      setFees(res.data);       // <-- এখানে state আপডেট করতে হবে
    })
    .catch(err => console.error(err));
}, []);
  const handlePayClick = (fee) => {
    setSelectedFee(fee);
  };

  const handleConfirmPayment = () => {
    if (!semester || !session || !year) {
      alert("Select Semester, Session, and Year!");
      return;
    }

    alert(
      `Payment confirmed for Student ID: ${selectedFee.studentId}\nSemester: ${semester}, Session: ${session}, Year: ${year}`
    );
    setSelectedFee(null);
    setSemester("");
    setSession("");
    setYear("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-blue-700">💰 Fees</h2>

      {/* Fees Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fees.map((fee) => (
          <div key={fee._id} className="bg-white p-4 rounded shadow hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Student ID: {fee.studentId}</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Admission Fee: ${fee.admissionFee}</li>
              <li>Tuition Fee: ${fee.tuitionFee}</li>
              <li>Seminar Fee: ${fee.seminarFee}</li>
              <li>Form Fill-up Fee: ${fee.formFillupFee}</li>
              <li>Lab Fee: ${fee.labFee}</li>
            </ul>
            <button
              onClick={() => handlePayClick(fee)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Pay Now
            </button>
          </div>
        ))}
      </div>

      {/* Payment Form Modal */}
      {selectedFee && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded shadow w-96">
            <h3 className="text-xl font-bold mb-4">Select Semester, Session, Year</h3>

            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="border p-2 rounded w-full mb-3"
            >
              <option value="">Semester</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
            </select>

            <select
              value={session}
              onChange={(e) => setSession(e.target.value)}
              className="border p-2 rounded w-full mb-3"
            >
              <option value="">Session</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
            </select>

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            >
              <option value="">Year</option>
              {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i).map(
                (yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                )
              )}
            </select>

            <div className="flex justify-between">
              <button
                onClick={handleConfirmPayment}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Confirm Payment
              </button>
              <button
                onClick={() => setSelectedFee(null)}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fees;
