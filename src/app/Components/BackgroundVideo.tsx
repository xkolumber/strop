import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  videoSource: string;
}

const BackgroundVideo = ({ videoSource }: Props) => {
  return (
    <div className="relative w-full h-full 3xl:h-[800px]">
      <video
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        className="w-full h-full object-cover rounded-[8px] absolute top-0 z-10 "
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Skeleton
        className="absolute top-0 left-0 w-full h-full"
        height={700}
        borderRadius={8}
        baseColor="#c4c4c4"
      />
    </div>
  );
};

export default BackgroundVideo;
