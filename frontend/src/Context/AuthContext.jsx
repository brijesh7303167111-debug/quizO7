import { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Score, setScore] = useState(0);
   
 const increaseScore = (amount) => {
  setScore((prevScore) => prevScore + amount);
};
  

  return (
    <AuthContext.Provider value={{ Score, setScore , increaseScore }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
