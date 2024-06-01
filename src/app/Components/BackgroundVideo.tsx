import Image from "next/image";
interface Props {
  videoSource: string;
  placeholderImage: string;
}

const BackgroundVideo = ({ videoSource, placeholderImage }: Props) => {
  return (
    <div>
      <video
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        className="w-full h-full object-cover "
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
