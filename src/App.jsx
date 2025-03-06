import "./App.css";
import { LoginContextProvider, useLoginContext } from "./context/LoginContext";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <LoginContextProvider>
      <MainLayout />
    </LoginContextProvider>
  );
}

export default App;
