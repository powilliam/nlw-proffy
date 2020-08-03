import React from "react";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";

// 2:08:49

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Routes />
      <GlobalStyles />
    </React.StrictMode>
  );
};

export default App;
