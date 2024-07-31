import Image from "next/image";
import ButtonElement from "../ButtonElements/ButtonElement";

const AboutUsFirstElement = () => {
  return (
    <div className="main_section  ">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex flex-col w-full md:w-1/2 ">
          <h2 className="">O nás</h2>

          <div className="flex flex-col ">
            <p className="pt-4">
              Od roku 2004 sme neustále inovovali a rástli.
            </p>
            <p>
              Preto dnes prinášame moderné riešenia pre slovenský stavebný
              priemysel.
            </p>
            <p>Sme stabilným partnerom spoločností po celom Slovensku.</p>
            <div className="flex flex-row gap-4 mt-4 mb-4">
              <ButtonElement text="Kontaktujte nás" />
            </div>
          </div>
        </div>
        <Image
          src={"/strop_panel.jpg"}
          alt="Intro"
          width={500}
          height={500}
          quality={100}
          priority={true}
          className="object-cover w-full md:w-1/2 h-full rounded-[8px]  mt-6 md:mt-0"
        />
      </div>
    </div>
  );
};

export default AboutUsFirstElement;
