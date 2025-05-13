import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ name }) => {
  const navigate = useNavigate();
  const { setIslogin, setRole } = useAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      setIslogin(false);
      setRole(null);
      localStorage.setItem("login",false);
      localStorage.setItem("role",null);
      navigate("/login");
    });
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Welcome, {name}</h2>
      <button className="text-red-500" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
