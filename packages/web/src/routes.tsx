import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Classes from "./pages/Classes";
import GiveClasses from "./pages/GiveClasses";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact>
      <Landing />
    </Route>

    <Route path="/Classes">
      <Classes />
    </Route>

    <Route path="/giveclasses">
      <GiveClasses />
    </Route>
  </BrowserRouter>
);

export default Routes;
