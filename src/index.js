import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import NetworkInfoState from "./context/NetworkInfoState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NetworkInfoState>
      <App />
    </NetworkInfoState>
  </React.StrictMode>
);
