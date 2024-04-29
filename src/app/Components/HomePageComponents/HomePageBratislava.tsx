import React from "react";
import Image from "next/image";

const HomePageBratislava = () => {
  return (
    <div className="main_section flex flex-col md:flex-row bg-primary">
      <div className="flex flex-col w-1/2">
        <h2>Bratislava - Ružinov</h2>
        <p>
          Máme za sebou mnoho komplikovaných stavebných projektov, vďaka ktorým
          sme sa stali stabilným partnerom stavebných spoločností na území
          celého Slovenska.
        </p>
        <button className="btn btn--secondary">Zistiť viac</button>
        <button className="btn btn--secondary">Zistiť viac</button>
        <button className="btn btn--secondary">Zistiť viac</button>
      </div>
      <div className="grid grid-cols-3 md:w-1/2 gap-4">
        <Image src={"/bratislava1.jpg"} alt="panel" width={500} height={500} />{" "}
        <Image src={"/bratislava2.jpg"} alt="panel" width={500} height={500} />{" "}
        <Image src={"/bratislava3.jpg"} alt="panel" width={500} height={500} />{" "}
        <Image src={"/bratislava4.jpg"} alt="panel" width={500} height={500} />{" "}
        <Image src={"/bratislava5.jpg"} alt="panel" width={500} height={500} />{" "}
        <Image src={"/bratislava6.jpg"} alt="panel" width={500} height={500} />
      </div>
    </div>
  );
};

export default HomePageBratislava;
