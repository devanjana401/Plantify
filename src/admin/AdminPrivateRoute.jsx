import React from "react";
import { Navigate } from "react-router-dom";

// only allows admins
const AdminPrivateRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? children : <Navigate to="/admin-login" />;
};

export default AdminPrivateRoute;
