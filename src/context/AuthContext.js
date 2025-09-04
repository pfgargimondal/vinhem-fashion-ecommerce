import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("jwtToken"));
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (token, userData) => {
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ persist user
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    if (!user && token) {
      // Optionally: fetch user profile with token if not stored
      fetch("/api/user/profile", { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.json())
        .then(data => setUser(data.user));
    }
  }, [token]);


  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
