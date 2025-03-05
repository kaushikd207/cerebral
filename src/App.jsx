import "./App.css";
import { LoginContextProvider, useLoginContext } from "./context/LoginContext";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <LoginContextProvider>
      <Outlet />
    </LoginContextProvider>
  );
}

export default App;
