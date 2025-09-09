import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register";
import SocialLogin from "../pages/login/SocialLogin";
import StudentDashboard from "../pages/dashboard/StudentDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,   // এখানে Component এর বদলে element ব্যবহার করতে হবে
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path:"social-login",
        element:<SocialLogin/>
        

      }, {
        path: "/dashboard",
        Component:StudentDashboard
      }
    ],
  },
]);
