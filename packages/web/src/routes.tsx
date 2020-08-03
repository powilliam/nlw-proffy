import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Teachers from "./pages/Teachers";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact>
      <Landing />
    </Route>

    <Route path="/teachers">
      <Teachers />
    </Route>
  </BrowserRouter>
);

export default Routes;
