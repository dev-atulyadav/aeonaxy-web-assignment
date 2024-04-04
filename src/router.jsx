import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Sections from "./components/Sections/Sections";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Sections />,
      },
    ],
  },
]);
