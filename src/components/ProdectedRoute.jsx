// components/AdminRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

const AdminRoute = ({ children }) => {
  const { user } = useAuthStore();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;
