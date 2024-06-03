import Image from "next/image";
interface Props {
  videoSource: string;
}

const BackgroundVideo = ({ videoSource }: Props) => {
  return (
    <div>
      <video
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        className="w-full h-full object-cover rounded-[8px] "
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
