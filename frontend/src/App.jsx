/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import RoleSelect from "./pages/RoleSelect";
import Admin from "./pages/Admin";
import Guest from "./pages/Guest";

const App = () => {
  const [user, setUser] = useState(false);
  const [role, setRole] = useState("admin");
  // const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={role === "guest" ? <Guest /> : <Admin />} />
        <Route path="/showModal" element={<RoleSelect />} />
        <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" replace />}
      />
      </Routes>
    </Router>
  );
};

export default App;
