import React from "react";
import LandingPage from "./LandingPage";
import NetworkSection from "./NetworkSection";
import CreateBlog from "./CreateBlog";
import InsightSection from "./InsightSection";
import EarnMoneySection from "./EarnMoneySection";
import More from "./More";

const Sections = () => {
  return (
    <>
      <LandingPage />
      <NetworkSection />
      <CreateBlog />
      <InsightSection />
      <EarnMoneySection />
      <More />
    </>
  );
};

export default Sections;
