import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Route.jsx";
import AuthPRovider from "./provider/AuthPRovider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthPRovider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </AuthPRovider>
  </StrictMode>
);
