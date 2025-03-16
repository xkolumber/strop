import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomePageBratislavaSkeleton = () => {
  return (
    <div className="bg-primary">
      <div className="main_section flex flex-col md:flex-row  gap-6">
        <div className="flex flex-col md:w-1/2">
          <p>
            {" "}
            <Skeleton width={"30%"} baseColor="#c4c4c4" />
          </p>
          <h2>
            {" "}
            <Skeleton width={"50%"} baseColor="#c4c4c4" className="mt-2" />
          </h2>
          <p className="mt-8">
            {" "}
            <Skeleton count={2} baseColor="#c4c4c4" />
          </p>
        </div>
        <div className="flex flex-col md:w-1/2">
          <div className="relative ">
            <Skeleton
              borderRadius={8}
              baseColor="#c4c4c4"
              className="absolute top-0  h-[248px] md:h-[344px] 2xl:h-[398px] 3xl:h-[518px]"
            />
          </div>
          <div className="grid grid-cols-3 mt-8 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={index}
                baseColor="#c4c4c4"
                borderRadius={8}
                className="w-full h-[160px] rounded-[8px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBratislavaSkeleton;
