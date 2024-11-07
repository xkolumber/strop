import AboutUsFirstElement from "../Components/AboutUsComponents/AboutUsFirstElement";
import AboutUsModernSociety from "../Components/AboutUsComponents/AboutUsModernSociety";
import AboutUsTeamProfesional from "../Components/AboutUsComponents/AboutUsTeamProfesional";
import HomePageBlogSection from "../Components/HomePageComponents/HomePageBlogSection";
import HomePageInfo from "../Components/HomePageComponents/HomePageInfo";

const page = () => {
  return (
    <div className="">
      <AboutUsModernSociety />

      <AboutUsFirstElement />
      <AboutUsTeamProfesional />

      <HomePageBlogSection colorGray={false} />
      <HomePageInfo />
    </div>
  );
};

export default page;
