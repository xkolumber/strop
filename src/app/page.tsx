import HomePageBestSolution from "./Components/HomePageComponents/HomePageBestSolution";
import HomePageBlogSection from "./Components/HomePageComponents/HomePageBlogSection";
import HomePageBratislava from "./Components/HomePageComponents/HomePageBratislava";
import HomePageBuildFast from "./Components/HomePageComponents/HomePageBuildFast";
import HomePageInfo from "./Components/HomePageComponents/HomePageInfo";
import HomePagePanelServer from "./Components/HomePageComponents/HomePagePanelServer";
import HomePageTechnical from "./Components/HomePageComponents/HomePageTechnical";

export default function Home() {
  return (
    <main className="">
      <HomePageBestSolution />
      <HomePageBuildFast />

      <HomePagePanelServer />
      <HomePageBratislava />
      <HomePageBlogSection colorGray={false} />
      <HomePageTechnical />
      <HomePageInfo />
    </main>
  );
}
