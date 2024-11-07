import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogSlugSkeleton = () => {
  return (
    <div className="main_section additional_padding">
      <p>
        {" "}
        <Skeleton width={60} baseColor="#DEDEDE" borderRadius={4} />
      </p>

      <h2 className="mb-4 md:mb-8 text-center">
        {" "}
        <Skeleton borderRadius={20} baseColor="#DEDEDE" count={2} />
      </h2>
      <Skeleton height={800} borderRadius={20} baseColor="#DEDEDE" />
      <div className="flex flex-col w-full items-center mt-4 md:mt-12">
        <div className="md:max-w-[70%] w-full">
          <Skeleton count={20} borderRadius={20} baseColor="#DEDEDE" />
        </div>
      </div>
    </div>
  );
};

export default BlogSlugSkeleton;
