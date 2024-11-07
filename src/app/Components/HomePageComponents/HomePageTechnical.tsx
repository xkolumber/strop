import Image from "next/image";
import Link from "next/link";
import ButtonElement from "../ButtonElements/ButtonElement";

const HomePageTechnical = () => {
  return (
    <div className="bg-primary">
      <div className="main_section  nd:max-h-[600px]">
        <div className="flex flex-col md:flex-row md:gap-6 xl:gap-8 2xl:gap-12">
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fpanel.jpg?alt=media&token=4fa05e2e-1228-4aa1-9bae-d8d0eea595d6"
            }
            alt="panel"
            width={500}
            height={500}
            className="w-full md:w-1/2 max-h-[400px] 3xl:max-h-[500px] object-cover hidden md:block rounded-[8px]"
          />
          <div
            className="w-full md:w-1/2 justify-center  flex flex-col
        "
          >
            <p>[Pre profesionálov]</p>
            <h2>Technické špecifikácie panelov na stiahnutie v PDF</h2>
            <p className="mt-4">
              Získajte úplné informácie a podrobnosti o našich produktoch. Stačí
              vyplniť e-mail a my vám zašleme dokumenty s potrebnými technickými
              špecifikáciami a detailami.
            </p>{" "}
            <Link href={"/stropne-panely#na_stiahnutie"}>
              <div className="mt-4">
                <ButtonElement text="Zistiť viac" />
              </div>
            </Link>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fpanel.jpg?alt=media&token=4fa05e2e-1228-4aa1-9bae-d8d0eea595d6"
              }
              alt="panel"
              width={500}
              height={500}
              className="w-full md:w-1/2 h-full object-cover  md:hidden mt-6 rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTechnical;
