import Image from "next/image";
import React, { Suspense } from "react";
import ButtonElement from "../ButtonElement";
import BackgroundVideo from "../BackgroundVideo";
import { ClipLoader } from "react-spinners";

const HomePageBestSolution = () => {
  return (
    <div className="main_section additional_padding">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h2 className="md:w-[60%]">Najlepšie riešenie pre Vašu stavbu</h2>

        <div className="flex flex-col md:w-[40%]">
          <p className="">
            Špecializujeme sa na dodávanie predpätých stropných systémov pre
            stavby na celom území Slovenska, Česka a Rakúska. Sme hrdí na naše
            referencie. STROP SK je dynamická spoločnosť, ktorá sa rýchlo
            rozvíja. Sme presvedčení, že kľúčom k úspechu je individuálny
            prístup ku každému klientovi.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <ButtonElement text="Produkty" />
            <ButtonElement text="Kontaktujte nás" />
          </div>
        </div>
      </div>
      {/* <Image alt="sdf" src={"/placeholder.png"} width={1000} height={1000} /> */}

      <Suspense
        fallback={
          <div className="main_section min-h-[600px]">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <BackgroundVideo
          videoSource="https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/videa%2Fvyroba%20madarsko%201.mp4?alt=media&token=bb83d06f-6496-420a-a968-9469f00fbabe"
          placeholderImage="/placeholder.png"
        />
      </Suspense>
    </div>
  );
};

export default HomePageBestSolution;
