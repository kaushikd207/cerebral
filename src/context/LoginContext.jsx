import { createContext, useContext } from "react";
import { useState } from "react";
const LoginContext = createContext();
export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const setLoginValue = () => {
    setLogin(true);
  };

  return (
    <LoginContext.Provider value={{ login, setLoginValue }}>
      {children}
    </LoginContext.Provider>
  );
};
export const useLoginContext = () => {
  return useContext(LoginContext);
};
