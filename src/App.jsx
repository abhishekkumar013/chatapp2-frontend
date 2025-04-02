import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import { SignUp } from "./pages/SingUp";
import Dashboard from "./componets/Dashboard/Dashboard";

// Protected route component to check authentication
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to login if no token found
    return <Navigate to="/signin" replace />;
  }

  // If token exists, render the protected component
  return children;
};

// Public routes that should only be accessible when not logged in
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    // Redirect to dashboard if already logged in
    return <Navigate to="/dashboard" replace />;
  }

  // If no token, render the public route
  return children;
};

const App = () => {
  // Check for token at app initialization
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    // Optional: You can add token validation logic here
    // For example, check if token is expired
  }, []);

  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />

      <Route
        path="/signin"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />

      {/* Protected route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
