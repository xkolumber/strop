import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AdminProductSkeleton = () => {
  return (
    <div className="main_section additional_padding min-h-screen ">
      <h4 className="mt-8">
        {" "}
        <Skeleton width={300} baseColor="#DEDEDE" />
      </h4>

      <Skeleton height={60} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={60} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={60} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={60} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={60} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={60} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={60} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={60} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={60} borderRadius={10} baseColor="#DEDEDE" />
    </div>
  );
};

export default AdminProductSkeleton;
