import React from "react";
import CeilingPanelIntro from "../Components/CeilingPanel/CeilingPanelIntro";
import ProfesionalDownload from "../Components/ProfesionalComponents/ProfesionalDownload";
import ProfesionalCuts from "../Components/ProfesionalComponents/ProfesionalCuts";
import CeilingPanelCut from "../Components/CeilingPanel/CeilingPanelCut";
import CeilingPanelCalculate from "../Components/CeilingPanel/CeilingPanelCalculate";
import HomePageBratislava from "../Components/HomePageComponents/HomePageBratislava";
import HomePageInfo from "../Components/HomePageComponents/HomePageInfo";

const page = () => {
  return (
    <div>
      <CeilingPanelIntro />
      <ProfesionalDownload />
      <CeilingPanelCut />
      <CeilingPanelCalculate />
      <HomePageBratislava />
      <HomePageInfo />
    </div>
  );
};

export default page;
