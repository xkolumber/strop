import Image from "next/image";
import HomePageBestSolution from "./Components/HomePageComponents/HomePageBestSolution";
import HomePageBuildFast from "./Components/HomePageComponents/HomePageBuildFast";
import HomePagePanel from "./Components/HomePageComponents/HomePagePanel";
import HomePageBratislava from "./Components/HomePageComponents/HomePageBratislava";

export default function Home() {
  return (
    <main className="">
      <HomePageBestSolution />
      <HomePageBuildFast />
      <HomePagePanel />
      <HomePageBratislava />
    </main>
  );
}
