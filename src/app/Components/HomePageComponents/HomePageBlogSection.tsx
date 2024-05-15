import React from "react";
import OneBlogSection from "../OneBlogSection";
import ButtonElement from "../ButtonElement";

const HomePageBlogSection = () => {
  return (
    <div className="main_section">
      <p className="mb-4">[ Blog ]</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <OneBlogSection />
        <OneBlogSection />
        <OneBlogSection />
      </div>
      <div className="mt-8">
        <ButtonElement text="Všetky blogy" />
      </div>
    </div>
  );
};

export default HomePageBlogSection;
