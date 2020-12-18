import React from "react";

const RandomPage = React.lazy(() => import("./RandomPage"));

const routes = [
  {
    path: "/random",
    component: RandomPage,
  },
];

export default routes;
