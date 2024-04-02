import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import NetworkInfoState from "./context/NetworkInfoState";
import InsightSectionState from "./context/InsightSectionState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NetworkInfoState>
      <InsightSectionState>
        <App />
      </InsightSectionState>
    </NetworkInfoState>
  </React.StrictMode>
);
