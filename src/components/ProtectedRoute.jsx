import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    
  return localStorage.getItem("key") ? children: <Navigate to="/signup" /> ;
}
