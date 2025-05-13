import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleSelect = () => {
  const navigate = useNavigate();
  const { setRole } = useAuth();

  const handleRole = (role) => {
    setRole(role);
    localStorage.setItem("role", role);
    navigate("/");
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center space-y-4">
        <h2 className="text-xl font-semibold">Select Your Role</h2>
        <div className="flex justify-around mt-4">
          <button
            onClick={() => handleRole("admin")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Admin
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            onClick={() => handleRole("guest")}
          >
            Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
