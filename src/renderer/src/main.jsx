import "./assets/main.css";

import { Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import { Router } from "../../lib/electron-router-dom";
import { App } from "./App/App";
import { FirstPage } from "./App/FirstPage";
import { SystemInfo } from "./App/SystemInfo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router
      main={
        <>
          <Route path="/" element={<App />} />
          <Route path="/first-page" element={<FirstPage />} />
          <Route path="/second-page" element={<SystemInfo />} />
        </>
      }
    />
  </React.StrictMode>
);
