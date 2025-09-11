import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register";
import SocialLogin from "../pages/login/SocialLogin";
import StudentDashboard from "../pages/dashboard/StudentDashboard";
import Profile from "../pages/dashboard/profile/Profile";
import UpcomingExams from "../pages/dashboard/upcomingexam/UpcomingExams";
import Attendance from "../pages/dashboard/attendance/Attendance";
import Fees from "../pages/dashboard/fees/Fees";
import Notification from "../pages/dashboard/notification/Notification";
import Tools from "../pages/tools/Tools";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "social-login", element: <SocialLogin /> },
      {
        path: "tools",
        element:<Tools/>

      },
      {
        path: "dashboard",
        element: <StudentDashboard />, // ✅
        children: [
          { path: "profile", element: <Profile /> }, // ✅
          { path: "exams", element: <UpcomingExams /> },
          { path: "attendance", element: <Attendance /> },
          { path: "fees", element: <Fees /> },
          {
            path: "notifications",
            Component:Notification
          }
        ],
      },
    ],
  },
]);
