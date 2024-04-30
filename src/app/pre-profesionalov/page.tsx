import React from "react";
import ProfesionalIntro from "../Components/ProfesionalComponents/ProfesionalIntro";
import ProfesionalPanel from "../Components/ProfesionalComponents/ProfesionalPanel";
import ProfesionalCuts from "../Components/ProfesionalComponents/ProfesionalCuts";
import ProfesionalDownload from "../Components/ProfesionalComponents/ProfesionalDownload";
import HomePageBlogSection from "../Components/HomePageComponents/HomePageBlogSection";
import HomePageInfo from "../Components/HomePageComponents/HomePageInfo";

const page = () => {
  return (
    <div className="">
      <ProfesionalIntro />
      <ProfesionalPanel />
      <ProfesionalCuts />
      <ProfesionalDownload />
      <HomePageBlogSection />
      <HomePageInfo />
    </div>
  );
};

export default page;
