"use client";
import { useRouter } from "next/navigation";

const StepBack = () => {
  const router = useRouter();

  return (
    <p
      onClick={() => router.back()}
      className="underline text-black hover:text-fifthtiary cursor-pointer"
    >
      Späť
    </p>
  );
};

export default StepBack;
