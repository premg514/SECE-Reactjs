import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const authority = true
  return authority ? children: <Navigate to="/signup" /> ;
}
