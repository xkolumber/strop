"use client";
import Image from "next/image";
import Link from "next/link";
import ButtonElement from "../ButtonElements/ButtonElement";

export function createSlug(title: string): string {
  const slug = title
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

  return slug;
}

const HomePagePanel = () => {
  return (
    <div className="main_section ">
      <div className="flex flex-col md:flex-row md:gap-6 xl:gap-8 2xl:gap-12 ">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fstrop_min_2.png?alt=media&token=0fd1470b-44c6-4816-9b3f-680718613c66"
          alt="panel"
          width={800}
          height={800}
          quality={75}
          className="w-full md:w-1/2 hidden md:block h-auto  object-cover rounded-[8px]"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNwdbJesWC2v58/AxMDw///r89f2b9z99yM3AQAitAMJTwYjEYAAAAASUVORK5CYII="
        />

        <div className="justify-between flex flex-col md:w-1/2 ">
          <div className="flex flex-col">
            <p>[Produkty]</p>
            <h2>Stropné panely 160, 200, 265, 320, 400</h2>
            <p className="mt-4">
              Vďaka nízkej váhe a špeciálnemu spôsobu výroby sú dutinové panely
              vhodné aj pre tie najnáročnejšie projekty. Veľkou výhodou našich
              panelov je aj variabilita možností uloženia. Priestupy a otvory
              podľa individuálnych požiadaviek môžeme pripraviť už pri výrobe,
              vrátane otvorov pre schodiská, svetlíky, vzduchotechniku,
              rekuperácie a pod. Detaily a technické riešenia skladby navrhuje
              naše oddelenie projekcie, takže náš zákazník vopred vie, ako bude
              jeho riešenie vyzerať.
            </p>
            <p className="mt-4 line-clamp-5 2xl:line-clamp-[8]">
              Dutinové panely s hrúbkou 200 mm sa vyrábajú v troch rôznych
              pevnostných kategóriách: základný model (200/1) zosilnený model
              (200/2) a najpevnejší panel (200/3).{" "}
            </p>
            <p className="mt-4 line-clamp-5 2xl:line-clamp-[8]">
              Všetky typy panelov sa vyrábajú vo viacerých pevnostných
              kategóriách. Sú rozlížené pevnostným znakom 1-4 uvedeným za
              lomítkom v označení panelu. (napr EHC200/1 alebo EHC265/3 )
            </p>
            <Link className="" href={`/stropne-panely`}>
              <div className="mt-8 mb-8">
                <ButtonElement text="Zistiť viac" />
              </div>
            </Link>
          </div>

          <Image
            src="https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fpanely_zoom.png?alt=media&token=ec112c63-b095-42b5-885e-4fe5f00bb6be"
            alt="panel"
            width={500}
            height={500}
            className="w-full md:w-1/2  md:hidden mt-8 rounded-[8px]"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNwdbJesWC2v58/AxMDw///r89f2b9z99yM3AQAitAMJTwYjEYAAAAASUVORK5CYII="
          />
        </div>
      </div>
    </div>
  );
};

export default HomePagePanel;
