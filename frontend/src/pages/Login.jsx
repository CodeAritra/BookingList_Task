import React from "react";
import { FcGoogle } from "react-icons/fc"; 
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setIslogin } = useAuth();
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setIslogin(true);
      localStorage.setItem("login", true);
      navigate("/role");
    } catch (err) {
      console.error("Google Sign-In Error:", err);
    }
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-sm text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome</h2>
        <p className="text-gray-600 text-sm md:text-base">Sign in with your Google account</p>
        <button
          className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 px-4 py-3 rounded-lg shadow hover:shadow-md hover:bg-gray-50 transition-all"
          onClick={handleLogin}
        >
          <FcGoogle size={24} />
          <span className="font-medium text-gray-700 text-sm md:text-base">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
