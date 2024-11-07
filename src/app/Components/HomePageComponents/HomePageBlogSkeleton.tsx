import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomePageBlogSkeleton = () => {
  return (
    <div>
      <div className={`${""}`}>
        <div className={`main_section `}>
          <p className="mb-4">
            {" "}
            <Skeleton width={80} baseColor="#DEDEDE" />
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-8 3xl:gap-12">
            <Skeleton height={500} borderRadius={20} baseColor="#DEDEDE" />
            <Skeleton height={500} borderRadius={20} baseColor="#DEDEDE" />
            <Skeleton height={500} borderRadius={20} baseColor="#DEDEDE" />
          </div>

          <div className="mt-8 2xl:mt-16">
            <Skeleton
              width={160}
              baseColor="#DEDEDE"
              height={40}
              borderRadius={8}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlogSkeleton;
