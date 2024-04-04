import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";

export const CreateBlogContext = createContext();
const CreateBlogState = ({ children }) => {
  const [gettingStart] = useState([
    {
      title: "Start a blog",
      content: (
        <p>
          Create a blog for free to have a personalized home for your writing.
          Brand{" "}
          <Link to="#" className="underline">
            your space
          </Link>{" "}
          and share your writing with readers on any device.
        </p>
      ),
    },
    {
      title: "Start a publication.",
      content: (
        <p>
          Collaborate with others or public under a brand name. Use our story
          submission system and expressive customization option.
        </p>
      ),
    },
  ]);
  return (
    <CreateBlogContext.Provider value={{ gettingStart }}>
      {children}
    </CreateBlogContext.Provider>
  );
};

export default CreateBlogState;
