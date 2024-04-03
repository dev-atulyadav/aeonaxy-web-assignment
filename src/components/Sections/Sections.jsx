import React from "react";
import LandingPage from "./LandingPage";
import NetworkSection from "./NetworkSection";
import CreateBlog from "./CreateBlog";
import InsightSection from "./InsightSection";
import EarnMoneySection from "./EarnMoneySection";
import More from "./More";
import Footer from "../Footer/Footer";

const Sections = () => {
  return (
    <>
      <LandingPage />
      <NetworkSection />
      <CreateBlog />
      <InsightSection/>
      <EarnMoneySection/>
      <More/>
      <Footer/>
    </>
  );
};

export default Sections;
