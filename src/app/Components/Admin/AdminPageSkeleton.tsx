import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AdminPageSkeleton = () => {
  return (
    <div className="main_section additional_padding ">
      <h4 className="mt-8">
        {" "}
        <Skeleton width={300} baseColor="#DEDEDE" />
      </h4>

      <Skeleton height={20} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={20} borderRadius={10} baseColor="#DEDEDE" />
      <Skeleton height={20} borderRadius={10} baseColor="#DEDEDE" />
    </div>
  );
};

export default AdminPageSkeleton;
