import { PanelProduct } from "@/app/firebase/interface";
import HomePageBratislava from "../HomePageComponents/HomePageBratislava";
import HomePageInfo from "../HomePageComponents/HomePageInfo";

import CeilingPanelIntro from "./CeilingPanelIntro";

interface Props {
  data: PanelProduct[];
}

const CeilingPanelWholeSection = ({ data }: Props) => {
  return (
    <div>
      <CeilingPanelIntro data={data} />

      <HomePageBratislava />
      <HomePageInfo />
    </div>
  );
};

export default CeilingPanelWholeSection;
