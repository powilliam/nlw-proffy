import React from "react";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <StoreProvider store={store}>
        <Routes />
        <GlobalStyles />
      </StoreProvider>
    </React.StrictMode>
  );
};

export default App;
