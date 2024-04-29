import HomePageBestSolution from "./Components/HomePageComponents/HomePageBestSolution";
import HomePageBuildFast from "./Components/HomePageComponents/HomePageBuildFast";
import HomePagePanel from "./Components/HomePageComponents/HomePagePanel";
import HomePageBratislava from "./Components/HomePageComponents/HomePageBratislava";
import HomePageBlogSection from "./Components/HomePageComponents/HomePageBlogSection";
import HomePageTechnical from "./Components/HomePageComponents/HomePageTechnical";

export default function Home() {
  return (
    <main className="">
      <HomePageBestSolution />
      <HomePageBuildFast />
      <HomePagePanel />
      <HomePageBratislava />
      <HomePageBlogSection />
      <HomePageTechnical />
    </main>
  );
}
