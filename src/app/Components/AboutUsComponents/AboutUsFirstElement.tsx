import Image from "next/image";
import ButtonElement from "../ButtonElements/ButtonElement";
import Link from "next/link";

const AboutUsFirstElement = () => {
  return (
    <div className="main_section  ">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex flex-col w-full md:w-1/2 ">
          <h2 className="">O nás</h2>

          <div className="flex flex-col ">
            <p className="pt-4">
              Od roku 2002 sme neustále inovovali a rástli.
            </p>
            <p>
              Preto dnes prinášame moderné riešenia pre slovenský stavebný
              priemysel.
            </p>
            <p>Sme stabilným partnerom spoločností po celom Slovensku.</p>
            <Link className="flex flex-row gap-4 mt-4 mb-4" href={"/kontakt"}>
              <ButtonElement text="Kontaktujte nás" />
            </Link>
          </div>
        </div>
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fstrop_panel.jpg?alt=media&token=6541cdae-f577-40b8-8360-2024ec549e36"
          }
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
