import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("jwtToken"));
  const [user, setUser] = useState(null);

  const login = (token, userData) => {
    localStorage.setItem("jwtToken", token);
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    // optionally decode token or fetch user data here
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);