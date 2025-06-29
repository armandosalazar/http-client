import React from "react";
import ReactDOM from "react-dom/client";
import CustomRouterProvider from "./providers/custom-router-provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CustomRouterProvider />
  </React.StrictMode>,
);
