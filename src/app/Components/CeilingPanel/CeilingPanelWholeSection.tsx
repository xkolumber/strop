import { PanelProduct } from "@/app/firebase/interface";
import React from "react";
import HomePageBratislava from "../HomePageComponents/HomePageBratislava";
import HomePageInfo from "../HomePageComponents/HomePageInfo";
import ProfesionalDownload from "../ProfesionalComponents/ProfesionalDownload";
import CeilingPanelCalculate from "./CeilingPanelCalculate";
import CeilingPanelCut from "./CeilingPanelCut";
import CeilingPanelIntro from "./CeilingPanelIntro";

interface Props {
  data: PanelProduct[];
}

const CeilingPanelWholeSection = ({ data }: Props) => {
  return (
    <div>
      <CeilingPanelIntro data={data} />
      {/* <ProfesionalDownload /> */}
      <CeilingPanelCut />
      <CeilingPanelCalculate />
      <HomePageBratislava />
      <HomePageInfo />
    </div>
  );
};

export default CeilingPanelWholeSection;
