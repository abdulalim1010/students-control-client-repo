import React, { useContext } from "react";
import { Authcontext } from "../../login/authcotext/Authcontext";


const Profile = () => {
  const { user } = useContext(Authcontext);
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">👤 My Profile</h2>

      <div className="flex items-center gap-6 mb-6">
        <img
          src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        <div>
          <h3 className="text-xl font-semibold">{user?.displayName || "Student"}</h3>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">User ID</h4>
          <p className="text-gray-600">{user?.uid}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Email Verified</h4>
          <p className="text-gray-600">{user?.emailVerified ? "✅ Yes" : "❌ No"}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Provider</h4>
          <p className="text-gray-600">{user?.providerId || "Email/Password"}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
