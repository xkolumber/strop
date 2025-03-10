import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoContact = () => {
  return (
    <div className="relative w-full lg:w-1/2  h-[250px] md:h-[400px] lg:h-[600px] rounded-[8px] object-cover flex">
      <video
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        className="w-full h-full object-cover rounded-[8px] absolute top-0 z-10 "
      >
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/videa%2Fvideo_strop_kontakt.mp4?alt=media&token=656cbdcd-2dcb-4f6c-939c-f40652e362e0"
          }
          type="video/mp4"
        />
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

export default VideoContact;

// w-full md:w-1/2 h-initial rounded-[8px] object-cover hidden md:flex
