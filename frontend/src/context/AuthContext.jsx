import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIslogin] = useState(
    localStorage.getItem("login") === "true"
  );
  const [role, setRole] = useState(localStorage.getItem("role") || null);
  useEffect(() => {
    console.log("role = ", role, "islogin = ", isLogin);
  }, [role, isLogin]);
  return (
    <AuthContext.Provider value={{ role, setRole, isLogin, setIslogin }}>
      {children}
    </AuthContext.Provider>
  );
};
