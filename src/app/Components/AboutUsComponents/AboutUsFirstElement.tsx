import React from "react";
import Image from "next/image";
import ButtonElement from "../ButtonElement";
import IconStar from "../Icons/IconStar";
import IconUser from "../Icons/IconUser";
import IconBuilding from "../Icons/IconBuilding";
import IconHouse from "../Icons/IconHouse";

const about_us_data = [
  {
    icon: <IconStar />,
    title: "19 rokov na Slovenskom trhu",
  },
  {
    icon: <IconUser />,
    title: "9 772 spokojných zákazníkov",
  },
  {
    icon: <IconBuilding />,
    title: "254 miest na Slovensku",
  },
  {
    icon: <IconHouse />,
    title: "27 838m² ročne",
  },
];

const AboutUsFirstElement = () => {
  return (
    <div className="main_section additional_padding">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h2 className="md:w-[60%]">O nás</h2>

        <div className="flex flex-col md:w-[40%]">
          <p className="">
            Od roku 2004 sme neustále inovovali a rástli. Preto dnes prinášame
            moderné riešenia pre slovenský stavebný priemysel. Sme stabilným
            partnerom spoločností po celom Slovensku.
          </p>
          <div className="flex flex-row gap-4">
            <ButtonElement text="Kontaktujte nás" />
          </div>
        </div>
      </div>
      <Image
        src={"/intro.jpg"}
        alt="Intro"
        sizes="100vw"
        width={1000}
        height={1000}
        className="object-cover w-full h-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 border-t border-black">
        {about_us_data.map((object, index) => (
          <div
            className="flex flex-row gap-4  p-4 border-b border-black"
            key={index}
          >
            {object.icon}
            <p>{object.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsFirstElement;
