import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import NetworkInfoState from "./context/NetworkInfoState";
import InsightSectionState from "./context/InsightSectionState";
import FooterState from "./context/FooterState";
import MoreState from "./context/MoreState";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CreateBlogState from "./context/CreateBlogState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NetworkInfoState>
      <CreateBlogState>
        <InsightSectionState>
          <FooterState>
            <MoreState>
              <RouterProvider router={router} />
            </MoreState>
          </FooterState>
        </InsightSectionState>
      </CreateBlogState>
    </NetworkInfoState>
  </React.StrictMode>
);
