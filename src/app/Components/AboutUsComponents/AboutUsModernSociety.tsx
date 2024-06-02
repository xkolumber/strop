import Link from "next/link";
import React from "react";
import ButtonElement from "../ButtonElement";
import Image from "next/image";

const AboutUsModernSociety = () => {
  return (
    <div className="main_section ">
      <h2>
        Moderná spoločnosť s dlhoročnou tradíciou a individuálnym prístupom k
        zákazníkom od roku 2004
      </h2>
      <p className="max-w-[600px]">
        Sme architekti snov a budovatelia vízií. Každý projekt, na ktorom
        pracujeme, je pre nás príležitosťou priniesť inováciu a štýl do ďalšej
        stavby, aby sme vytvorili miesta, ktoré inšpirujú a oživujú.
      </p>
      <Link href={"/stropne-panely"}>
        <ButtonElement text="Zistiť viac" />
      </Link>

      <div className="flex flex-row items-end gap-4 md:gap-8">
        <Image
          src={"/bratislava1.jpg"}
          alt="Photo blog"
          width={1000}
          height={1000}
          quality={100}
          className="w-full md:w-[33%] h-[338px] rounded-[8px] object-cover"
        />

        <Image
          src={"/bratislava1.jpg"}
          alt="Photo blog"
          width={1000}
          height={1000}
          quality={100}
          className="w-full  md:w-[33%]  h-[558px] rounded-[8px] object-cover"
        />

        <div className="flex flex-col md:w-[33%]  gap-4 md:gap-8">
          <Image
            src={"/bratislava1.jpg"}
            alt="Photo blog"
            width={1000}
            height={1000}
            quality={100}
            className="w-full  h-[338px] rounded-[8px] object-cover"
          />
          <Image
            src={"/bratislava1.jpg"}
            alt="Photo blog"
            width={1000}
            height={1000}
            quality={100}
            className="w-full  h-[166px] md:w-1/2  rounded-[8px] object-cover"
          />
          <Image
            src={"/bratislava1.jpg"}
            alt="Photo blog"
            width={1000}
            height={1000}
            quality={100}
            className="w-full  h-[88px]  md:w-1/3  rounded-[8px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsModernSociety;
