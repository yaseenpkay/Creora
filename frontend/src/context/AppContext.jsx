import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const handleCreateClick = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  const loadCredits = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { token } }
      );
      if (data.success) {
        loadCredits();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCredits();
        if (data.creditsBalance === 0) {
          navigate("/buy");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  // New verification method
  const verifyToken = async (storedToken) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/verify-token`, {
        token: storedToken,
      });

      if (data.success) {
        // Token is valid, set user and keep logged in
        setUser({ name: data.user.name });
        setToken(storedToken);
        // Optionally load credits
        loadCredits();
      } else {
        // Invalid token, log out
        logout();
      }
    } catch (error) {
      // Token verification failed
      logout();
      console.error("Token verification failed", error);
    }
  };

  // Add this useEffect to verify token on app load
  useEffect(() => {
    // If token exists in localStorage, verify it
    if (token) {
      verifyToken(token);
    }
  }, []);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    handleCreateClick,
    backendUrl,
    setCredit,
    credit,
    token,
    setToken,
    loadCredits,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
