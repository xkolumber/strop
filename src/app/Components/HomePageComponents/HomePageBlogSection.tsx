import React from "react";
import OneBlogSection from "../OneBlogSection";

const HomePageBlogSection = () => {
  return (
    <div className="main_section">
      <p>[Blog]</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <OneBlogSection />
        <OneBlogSection />
        <OneBlogSection />
      </div>
      <button className="btn btn--secondary">Všetky blogy</button>
    </div>
  );
};

export default HomePageBlogSection;
