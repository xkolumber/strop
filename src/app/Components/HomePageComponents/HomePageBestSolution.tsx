import Link from "next/link";
import BackgroundVideo from "../BackgroundVideo";
import ButtonElement from "../ButtonElements/ButtonElement";

const HomePageBestSolution = () => {
  return (
    <div className="main_section additional_padding">
      <div className="flex flex-col xl:flex-row justify-between mb-8">
        <h2 className="xl:max-w-[50%]">Najlepšie riešenie pre Vašu stavbu</h2>

        <div className="flex flex-col xl:w-[40%]">
          <p className="pt-4 pb-2">
            Špecializujeme sa na dodávanie predpätých stropných systémov pre
            stavby na celom území Slovenska, Česka a Rakúska. Sme hrdí na naše
            referencie. STROP SK je dynamická spoločnosť, ktorá sa rýchlo
            rozvíja. Sme presvedčení, že kľúčom k úspechu je individuálny
            prístup ku každému klientovi.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <Link className="" href={"/stropne-panely"}>
              <ButtonElement text="Produkty" />
            </Link>
            <Link className="" href={"/kontakt"}>
              <ButtonElement text="Kontaktujte nás" />
            </Link>
          </div>
        </div>
      </div>

      <BackgroundVideo videoSource="https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/videa%2FFINAL%204K%20STROPSK.mp4?alt=media&token=2c1634fa-5975-48c5-8c7f-1a193a155042" />
    </div>
  );
};

export default HomePageBestSolution;
