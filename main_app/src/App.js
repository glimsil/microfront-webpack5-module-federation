import { HashRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import React from "react";
import localRoutes from "./routes";
import aboutAppRoutes from "about_app/routes";
import otherAppRoutes from "other_app/routes";
import randomAppRoutes from "random_app/routes";

const routes = [...localRoutes, ...aboutAppRoutes, ...otherAppRoutes, ...randomAppRoutes];

const App = () => (
  <HashRouter>
    <div>
      <h1>Main App</h1>
      <Navigation />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </React.Suspense>
    </div>
  </HashRouter>
);

export default App;
