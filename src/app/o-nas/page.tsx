import React from "react";
import AboutUsFirstElement from "../Components/AboutUsComponents/AboutUsFirstElement";
import AboutUsTeamProfesional from "../Components/AboutUsComponents/AboutUsTeamProfesional";
import AboutUsOurTeam from "../Components/AboutUsComponents/AboutUsOurTeam";
import AboutUsModernSociety from "../Components/AboutUsComponents/AboutUsModernSociety";
import HomePageBlogSection from "../Components/HomePageComponents/HomePageBlogSection";
import HomePageInfo from "../Components/HomePageComponents/HomePageInfo";

const page = () => {
  return (
    <div className="">
      <AboutUsFirstElement />
      <AboutUsTeamProfesional />
      <AboutUsOurTeam />
      <AboutUsModernSociety />
      <HomePageBlogSection />
      <HomePageInfo />
    </div>
  );
};

export default page;
