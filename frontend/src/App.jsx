import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RoleSelect from "./pages/RoleSelect";
import Admin from "./pages/Admin";
import Guest from "./pages/Guest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/role" element={<RoleSelect />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/guest" element={<Guest />} />
      </Routes>
    </Router>
  );
};

export default App;
