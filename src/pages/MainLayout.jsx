import React from "react";
import { useLoginContext } from "@/context/LoginContext";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";

function MainLayout() {
  const login = useLoginContext();
  return login.login ? <Dashboard /> : <LoginPage />;
}

export default MainLayout;
