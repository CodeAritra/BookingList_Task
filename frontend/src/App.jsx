import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import RoleSelect from "./pages/RoleSelect";
import Admin from "./pages/Admin";
import Guest from "./pages/Guest";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { isLogin, role } = useAuth();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isLogin ? (
              <Navigate to="/login" />
            ) : role === "admin" ? (
              <Admin />
            ) : role === "guest" ? (
              <Guest />
            ) : (
              <Navigate to="/role" />
            )
          }
        />
        <Route
          path="/login"
          element={!isLogin ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/role"
          element={isLogin && !role ? <RoleSelect /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to={isLogin ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
