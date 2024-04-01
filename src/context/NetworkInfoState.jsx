import React, { createContext, useState } from "react";

export const NetworkInfoContext = createContext();
const NetworkInfoState = ({ children }) => {
  const [data] = useState([
    {
      name: "Barack Obama",
      img: "https://scontent.fdel11-4.fna.fbcdn.net/v/t39.30808-6/250690662_437398757747548_5868572553327609292_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KMeOJKLeP1oAX8o_hHZ&_nc_ht=scontent.fdel11-4.fna&oh=00_AfDLeQ3anF_Wh9QqKYUlwRgUtnOtoiKQnJCGqkwThQSNzw&oe=6610A396",
      roles: ["Dad", "Husband", "President", "Citizen"],
    },
    {
      name: "Michael Chabon",
      img: "https://media.vanityfair.com/photos/60843355bed97af780d6b947/1:1/w_3200,h_3200,c_limit/1199370114",
      roles: ["Novelist", "Screenwriter", "And Columnist"],
    },
    {
      name: "Camille Fournier",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dXeYW2TP814dC5co1rCtsJPCbItiw-8HvpT17PQoaw&s",
      roles: ["Engineer", "CTO", "and Author"],
    },
    {
      name: "Carvell Wallace",
      img: "https://hips.hearstapps.com/rover/profile_photos/173abbfd-dfef-4de1-b22d-fa7aadf1f0c9_1551905933.file?fill=1:1&resize=200:*",
      roles: ["New York Times Bestselling Author and Podcaster"],
    },
    {
      name: "Devon Price",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzraACZYQEj_cjw6QfBgIqx2z3E8YIjgf4gCNw7BhC8w&s",
      roles: ["social Psychologist and Author"],
    },
    {
      name: "Susan Orlean",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMqvBFmGVGk2gYjAk8LaFU4_XnrTWXi-mthWgf3a2aw&s",
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
