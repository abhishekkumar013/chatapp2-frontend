import React from "react";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SingUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
