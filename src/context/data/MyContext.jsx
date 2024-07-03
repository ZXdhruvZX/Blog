import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyStateProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyStateProvider };
