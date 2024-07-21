import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomePageBratislavaSkeleton = () => {
  return (
    <div className="bg-primary">
      <div className="main_section flex flex-col md:flex-row  gap-6">
        <div className="flex flex-col md:w-1/2">
          <p>
            {" "}
            <Skeleton width={300} baseColor="#c4c4c4" />
          </p>
          <h2>
            {" "}
            <Skeleton width={400} baseColor="#c4c4c4" />
          </h2>
          <p>
            {" "}
            <Skeleton count={2} baseColor="#c4c4c4" />
          </p>
          <Skeleton height={20} baseColor="#c4c4c4" />
          <Skeleton height={20} baseColor="#c4c4c4" />
          <Skeleton height={20} baseColor="#c4c4c4" />
          <Skeleton height={20} baseColor="#c4c4c4" />

          {/* <div className="scroll-container mt-4 !mb-2 md:hidden">
            {zakazky.map((object, index) => (
              <div
                className=""
                key={index}
                onClick={() => handleNewChoosenObject(object)}
              >
                <ButtonElement text={object.mesto} />
              </div>
            ))}
          </div> */}
        </div>
        <div className="flex flex-col md:w-1/2">
          <div className="relative ">
            <Skeleton
              borderRadius={8}
              baseColor="#c4c4c4"
              className="absolute top-0  h-[248px] md:h-[344px] 2xl:h-[398px] 3xl:h-[518px]"
            />
          </div>
          <div className="grid grid-cols-3 mt-8 gap-4 ">
            <Image
              src={"/bratislava1.jpg"}
              alt="panel"
              width={500}
              height={400}
              className="rounded-[8px] object-cover"
            />{" "}
            <Image
              src={"/bratislava2.jpg"}
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />{" "}
            <Image
              src={"/bratislava3.jpg"}
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />{" "}
            <Image
              src={"/bratislava4.jpg"}
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />{" "}
            <Image
              src={"/bratislava5.jpg"}
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />{" "}
            <Image
              src={"/bratislava6.jpg"}
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBratislavaSkeleton;
