import React, { createContext,useState } from "react";
import Logo from "../assets/logo.svg"

export const FooterContext = createContext();
const FooterState = ({ children }) => {
  const [logo] = useState(Logo)
  const [data] = useState([
    {
      title: "About",
      url: "/",
    },
    {
      title: "Terms",
      url: "/",
    },
    {
      title: "Privacy",
      url: "/",
    },
    {
      title: "Help",
      url: "/",
    },
  ]);
  return (
    <FooterContext.Provider value={{ data,logo }}>{children}</FooterContext.Provider>
  );
};

export default FooterState;
