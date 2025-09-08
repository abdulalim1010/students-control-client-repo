import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Authcontext } from "./authcotext/Authcontext";
import saveUserToDB from "../../datauser/saveUserToDB";
import { Link } from "react-router";
import SocialLogin from "./SocialLogin";


const Login = () => {
  const { login } = useContext(Authcontext); // <-- line added

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  try {
    const userCredential = await login(data.email, data.password);
    const user = userCredential.user;

    await saveUserToDB({
      uid: user.uid,
      name: user.displayName || "Anonymous",
      email: user.email,
      image: user.photoURL || "",
    });

    alert("Login successful and user saved to DB!");
  } catch (err) {
    console.error("Login failed:", err);
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border shadow rounded">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
      <div><Link to="/register">if you have no accoutn please register</Link></div>

      <div>
        <h1>Or</h1>
        <SocialLogin/>
      </div>
    </div>
  );
};

export default Login;
