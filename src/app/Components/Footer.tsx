import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="main_section bg-black  w-full">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-[250px] max-w-[400px] max-h-[200px]"
        />
        <div className=" flex flex-col md:flex-row gap-4 md:gap-24 xl:gap-52 mt-12 md:mt-0">
          <div className="flex flex-col ">
            <h5 className="uppercase text-white mb-4 md:mb-8">Produkty</h5>
            <p className="text-white">Strop</p>
            <p className="text-white">Strop</p>
            <p className="text-white">StropStrop</p>
          </div>
          <div className="flex flex-col">
            <h5 className="uppercase text-white mb-4 md:mb-8">Kontakt</h5>
            <p className="text-white">+421903243393</p>
            <p className="text-white">info@strop.sk</p>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-12 border-white border-t">
        <h6 className="text-white pt-4">GDPR</h6>
      </div>
    </div>
  );
};

export default Footer;
