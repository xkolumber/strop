import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const CeilingPanelIntroSkeleton = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="main_section flex flex-col">
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
              <Skeleton count={4} baseColor="#c4c4c4" />
            </p>
            <div className="mt-8">
              <Skeleton width={"70%"} baseColor="#c4c4c4" height={40} />
            </div>
            <div className="mt-2">
              {" "}
              <Skeleton width={"30%"} baseColor="#c4c4c4" />
            </div>
            <div className="mt-4">
              {" "}
              <Skeleton
                width={"20%"}
                baseColor="#c4c4c4"
                height={50}
                borderRadius={8}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8  gap-4">
            <Skeleton baseColor="#c4c4c4" borderRadius={8} height={60} />
            <Skeleton baseColor="#c4c4c4" borderRadius={8} height={60} />
            <Skeleton baseColor="#c4c4c4" borderRadius={8} height={60} />
            <Skeleton baseColor="#c4c4c4" borderRadius={8} height={60} />
            <Skeleton baseColor="#c4c4c4" borderRadius={8} height={60} />
            <Skeleton baseColor="#c4c4c4" borderRadius={8} height={60} />{" "}
            <Skeleton baseColor="#c4c4c4" borderRadius={8} height={60} />
            <Skeleton baseColor="#c4c4c4" borderRadius={8} height={60} />
            <Skeleton baseColor="#c4c4c4" borderRadius={8} height={60} />
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="main_section flex flex-col md:flex-row gap-6">
          <div className="flex flex-col md:w-1/2">
            <p>
              {" "}
              <Skeleton width={"30%"} baseColor="#fefefe" />
            </p>
            <h2>
              {" "}
              <Skeleton width={"50%"} baseColor="#fefefe" className="mt-2" />
            </h2>
            <p className="mt-8">
              {" "}
              <Skeleton count={6} baseColor="#fefefe" />
            </p>
            <h2 className="mt-8">
              <Skeleton width={"50%"} baseColor="#fefefe" className="mt-2" />
            </h2>
            <p className="mt-8">
              {" "}
              <Skeleton count={6} baseColor="#fefefe" />
            </p>
          </div>
          <div className="md:w-1/2">
            <Skeleton
              height={"100%"}
              baseColor="#fefefe"
              width={"100%"}
              borderRadius={8}
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="main_section flex flex-col">
          <h2>
            {" "}
            <Skeleton width={"70%"} baseColor="#cecece" className="mt-2" />
          </h2>
          <p className="mt-8">
            {" "}
            <Skeleton count={3} baseColor="#cecece" />
          </p>
          <h2 className="mt-16">
            {" "}
            <Skeleton width={"70%"} baseColor="#cecece" className="mt-2" />
          </h2>
          <p className="mt-8">
            {" "}
            <Skeleton count={3} baseColor="#cecece" />
          </p>
          <h2 className="mt-16">
            {" "}
            <Skeleton width={"70%"} baseColor="#cecece" className="mt-2" />
          </h2>
          <p className="mt-8">
            {" "}
            <Skeleton count={3} baseColor="#cecece" />
          </p>
        </div>
      </div>
    </>
  );
};

export default CeilingPanelIntroSkeleton;
