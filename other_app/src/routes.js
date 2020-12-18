import React from "react";

const OtherPage = React.lazy(() => import("./OtherPage"));

const routes = [
  {
    path: "/other",
    component: OtherPage,
  },
];

export default routes;
