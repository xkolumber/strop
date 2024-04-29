import Image from "next/image";
import HomePageBestSolution from "./Components/HomePageComponents/HomePageBestSolution";
import HomePageBuildFast from "./Components/HomePageComponents/HomePageBuildFast";

export default function Home() {
  return (
    <main className="">
      <HomePageBestSolution />
      <HomePageBuildFast />
    </main>
  );
}
