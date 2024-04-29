import Image from "next/image";
import React from "react";

const OneBlogSection = () => {
  return (
    <div className="rounded-3xl border border-black">
      <Image
        src={"/bratislava1.jpg"}
        alt="Blog section"
        width={300}
        height={300}
        className="w-full rounded-t-3xl"
      />
      <div className="p-7">
        <h5>Ako zvoliť správny predpätý stropný systém pre váš projekt?</h5>
        <p className="mt-4 mb-4">
          Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie,
          uložené ako obyčajný nosník, je ich možne uložiť aj pre konzolové
          uloženie.
        </p>
        <p>2024</p>
      </div>
    </div>
  );
};

export default OneBlogSection;
