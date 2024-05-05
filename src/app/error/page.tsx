import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="main_section additional_padding min-h-[700px] xl:min-h-screen justify-center items-center flex flex-col">
      <h2 className="text-center">Ľutujeme, zadaná stránka sa nenašla.</h2>
      ==
      <div className="flex flew-row gap-6">
        <a href="/" className="btn btn--primary">
          Domov
        </a>
      </div>
    </div>
  );
};

export default page;
