import React from "react";
import LandingPage from "./LandingPage";
import NetworkSection from "./NetworkSection";
import CreateBlog from "./CreateBlog";
import InsightSection from "./InsightSection";

const Sections = () => {
  return (
    <>
      <LandingPage />
      <NetworkSection />
      <CreateBlog />
      <InsightSection/>
    </>
  );
};

export default Sections;
