import CeilingFirstElement from "../Components/CeilingPanel/CeilingFirstElement";
import CeilingPanelIntroData from "../Components/CeilingPanel/CeilingPanelIntroData";
import HomePageBratislava from "../Components/HomePageComponents/HomePageBratislava";
import HomePageInfo from "../Components/HomePageComponents/HomePageInfo";

export default function Page() {
  return (
    <>
      <CeilingFirstElement />
      <CeilingPanelIntroData />

      <HomePageBratislava />
      <HomePageInfo />
    </>
  );
}
