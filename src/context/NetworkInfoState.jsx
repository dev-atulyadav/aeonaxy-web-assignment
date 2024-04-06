import React, { createContext, useState } from "react";
import User1 from "../assets/users/user-1.jpeg";
import User2 from "../assets/users/user-2.webp";
import User3 from "../assets/users/user-3.jpeg";
import User4 from "../assets/users/user-4.png";
import User5 from "../assets/users/user-5.jpeg";
import User6 from "../assets/users/user-6.jpeg";

export const NetworkInfoContext = createContext();
const NetworkInfoState = ({ children }) => {
  const [data] = useState([
    {
      name: "Barack Obama",
      img: User1,
      roles: ["Dad", "Husband", "President", "Citizen"],
    },
    {
      name: "Michael Chabon",
      img: User2,
      roles: ["Novelist", "Screenwriter", "And Columnist"],
    },
    {
      name: "Camille Fournier",
      img: User3,
      roles: ["Engineer", "CTO", "and Author"],
    },
    {
      name: "Carvell Wallace",
      img: User4,
      roles: ["New York Times Bestselling Author and Podcaster"],
    },
    {
      name: "Devon Price",
      img: User5,
      roles: ["social Psychologist and Author"],
    },
    {
      name: "Susan Orlean",
      img: User6,
      roles: ["Writer for the New Yorker", "Author"],
    },
  ]);
  return (
    <NetworkInfoContext.Provider value={{ data }}>
      {children}
    </NetworkInfoContext.Provider>
  );
};

export default NetworkInfoState;
