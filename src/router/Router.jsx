import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layouts/MainLayout";
import { Component } from "react";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
      Component:Home
     }
,{       path:"/login",Component:Login},{path:"/register",Component:Register}
    ]
  }
])