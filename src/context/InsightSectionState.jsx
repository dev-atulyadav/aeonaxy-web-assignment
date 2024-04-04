import React, { createContext, useState } from "react";
import Insight_1 from "../assets/images/insight-1.jpeg";
import Insight_2 from "../assets/images/insight-2.png";
import { Link } from "react-router-dom";

export const InsightSectionContext = createContext();
const InsightSectionState = ({ children }) => {
  const [data] = useState({
    first: {
      title: "Audience insights.",
      description: (
        <>
          Use{" "}
          <Link to="/" className="underline">
            data
          </Link>{" "}
          to learn what resonates with your readers so you can keep growing your
          audience.
        </>
      ),
      img: [Insight_1, Insight_2],
    },
    second: [
      {
        title: "Social connectivity.",
        description: (
          <>
            Find people you're already connected with on Twitter and easily{" "}
            <Link to="/" className="underline">
              share
            </Link>{" "}
            your stories across plateforms.
          </>
        ),
      },
      {
        title: "Powerful network.",
        description: (
          <>
            Readers can discover and follow you easily with{" "}
            <Link to="/" className="underline">
              tailored feeds
            </Link>{" "}
            and recommendations.
          </>
        ),
      },
    ],
    third: [
      {
        title: "Email subscriptions.",
        description: (
          <>
            Reach readers by having your stories{" "}
            <Link to="/" className="underline">
              delivered
            </Link>{" "}
            staight to their inboxes.
          </>
        ),
      },
      {
        title: "Interactive discussions.",
        description: (
          <>
            Build relationships with your readers through a{" "}
            <Link to="/" className="underline">
              threaded comments
            </Link>{" "}
            section.
          </>
        ),
      },
      {
        title: "Custom design.",
        description: (
          <>
            Easily{" "}
            <Link to="/" className="underline">
              customize
            </Link>{" "}
            your page to stand out and build your brand.
          </>
        ),
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
