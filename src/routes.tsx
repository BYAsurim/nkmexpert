"use client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./landing/LandingPage";
import { Methods } from "@/components/landing/Methods";
import { MethodsItem } from "@/components/landing/MethodsItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/services",
    element: <Methods />,
  },
  {
    path: "/services/:method",
    element: <MethodsItem />,
  },
]);

export default router;