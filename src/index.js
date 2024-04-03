import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import NetworkInfoState from "./context/NetworkInfoState";
import InsightSectionState from "./context/InsightSectionState";
import FooterState from "./context/FooterState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NetworkInfoState>
      <InsightSectionState>
        <FooterState>
          <App />
        </FooterState>
      </InsightSectionState>
    </NetworkInfoState>
  </React.StrictMode>
);
