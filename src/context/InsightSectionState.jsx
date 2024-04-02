import React, { createContext, useState } from "react";
import Insight_1 from "../assets/images/insight-1.jpeg";
import Insight_2 from "../assets/images/insight-2.png";

export const InsightSectionContext = createContext();
const InsightSectionState = ({ children }) => {
  const [data] = useState({
    first: {
      title: "Audience insights.",
      description:
        "Use data to learn what resonates with your readers so you can keep growing your audience.",
      img: [Insight_1, Insight_2],
    },
    second: [
      {
        title: "Social connectivity.",
        description:
          "Find people you're already connected with on Twitter and easily share your stories across plateforms.",
      },
      {
        title: "Powerful network.",
        description:
          "Readers can discover and follow you easily with tailored feeds and recommendations.",
      },
    ],
    third: [
      {
        title: "Email subscriptions.",
        description:
          "Reach readers by having your stories delivered staight to their inboxes.",
      },
      {
        title: "Interactive discussions.",
        description:
          "Build relationships with your readers through a threaded comments section.",
      },
      {
        title: "Custom design.",
        description:
          "Easily customize your page to stand out and build your brand.",
      },
    ],
  });
  return (
    <InsightSectionContext.Provider value={{ data }}>
      {children}
    </InsightSectionContext.Provider>
  );
};

export default InsightSectionState;
