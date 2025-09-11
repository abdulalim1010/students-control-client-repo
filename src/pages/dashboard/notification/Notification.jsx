import React, { useEffect, useState } from "react";
import axios from "axios";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/notifications")
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">🔔 Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications available</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((note) => (
            <div
              key={note._id}
              className="bg-white p-4 rounded shadow hover:shadow-lg"
            >
              <h3 className="font-semibold text-lg text-purple-600">
                {note.title}
              </h3>
              <p className="text-gray-700">{note.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                📅 {new Date(note.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
