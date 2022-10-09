import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  getProfile: () => {},
  profile: null
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    const storedProfile = localStorage.getItem("profile");
    
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
    if (storedProfile !== null) {
      setProfile(storedProfile);
    }
  }, []);

  const profileHandler = (prof) => {
    localStorage.setItem("profile", prof);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("profile");
    setIsLoggedIn(false);
    setProfile(null);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        getProfile: profileHandler,
        profile: profile
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
