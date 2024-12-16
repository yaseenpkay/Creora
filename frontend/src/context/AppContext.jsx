import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCreateClick = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    handleCreateClick,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
