import Image from "next/image";
import Link from "next/link";
import ButtonElement from "../ButtonElements/ButtonElement";
import IconBuilding from "../Icons/IconBuilding";
import IconHouse from "../Icons/IconHouse";
import IconStar from "../Icons/IconStar";
import IconUser from "../Icons/IconUser";

const about_us_data = [
  {
    icon: <IconStar />,
    title: "od roku 2002 na Slovenskom trhu",
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

const AboutUsModernSociety = () => {
  return (
    <div className="main_section additional_padding ">
      <p className="mb-2">[ Naša spoločnosť ]</p>
      <h2>
        Moderná spoločnosť s dlhoročnou tradíciou a individuálnym prístupom k
        zákazníkom od roku 2002
      </h2>
      <p className="max-w-[600px] pt-4">
        Sme architekti snov a budovatelia vízií. Každý projekt, na ktorom
        pracujeme, je pre nás príležitosťou priniesť inováciu a štýl do ďalšej
        stavby, aby sme vytvorili miesta, ktoré inšpirujú a oživujú.
      </p>
      <div className="mt-4 mb-4">
        <Link href={"/stropne-panely"} className="">
          <ButtonElement text="Zistiť viac" />
        </Link>
      </div>

      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fbratislava1.jpg?alt=media&token=abec8713-73bf-4f79-97a3-87da24c97f35"
        }
        alt="Photo blog"
        width={300}
        height={300}
        quality={100}
        className="w-full md:hidden h-[338px] rounded-[8px] object-cover mt-6 md:mt-0"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNw0hM6u295iJepIhsDg6O16fef35bP7o80YwAAdZUJpqVnlCUAAAAASUVORK5CYII="
      />

      <div className="hidden md:flex flex-row items-end gap-4 md:gap-8 md:!-mt-16 xl:!-mt-32">
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fo_nas.jpg?alt=media&token=9ac2c12f-a64b-4011-b1f8-7983b0add456"
          }
          alt="Photo blog"
          width={300}
          height={300}
          quality={100}
          className="w-full md:w-[33%] h-[238px] xl:h-[338px]  rounded-[8px] object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOIc9PraZ9/4tz3xRPaGEQZGHIya7/++X9/+yYAng4Nag2sURAAAAAASUVORK5CYII="
        />

        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fbuild_faster11.jpg?alt=media&token=cf06e38b-9643-4736-ba87-b40fdb6c27a7"
          }
          alt="Photo blog"
          width={300}
          height={600}
          quality={100}
          className="w-full  md:w-[33%]  h-[358px] xl:h-[558px] rounded-[8px] object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/ALvR6LzI1O/x+vz+/wCuucKNkZW9vsDs8fsAY1hcaQAAjHBqvdz0AG1FSEQAAHZXWTxUYnXwHFgHCHPsAAAAAElFTkSuQmCC"
        />

        <div className="flex flex-col md:w-[33%]  gap-4 md:gap-8">
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fo_nas2.jpg?alt=media&token=26605068-b8ff-4f58-9309-5c12950c02da"
            }
            alt="Photo blog"
            width={300}
            height={300}
            quality={100}
            className="w-full  h-[180px] xl:h-[338px] rounded-[8px] object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AJZuSJK+0WCfvfb9/QANAACCnKGyrqbp29C0wg6ApWTVhQAAAABJRU5ErkJggg=="
          />
          <div className="flex flex-row gap-4">
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fo_nas3.jpg?alt=media&token=725ca796-62d9-46d7-a2d1-c4ded430a588"
              }
              alt="Photo blog"
              width={200}
              height={200}
              quality={100}
              className="w-full  h-[88px] xl:h-[166px] md:w-1/2  rounded-[8px] object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AJ+ZmP/37sLCty86GwCGjV/i3MqtrJ4ABwDGvA1sfmGyygAAAABJRU5ErkJggg=="
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fo_nas4.jpg?alt=media&token=ecf9634c-ce0d-45d9-b9d5-f205702ee498"
              }
              alt="Photo blog"
              width={200}
              height={200}
              quality={100}
              className="w-full  h-[88px] md:w-1/4  rounded-[8px] object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgMHSS9s0wy5/CIKDKcPzYwXPnL7/78X/3kXMAc8cMolcwW84AAAAASUVORK5CYII="
            />
          </div>

          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fbratislava1.jpg?alt=media&token=abec8713-73bf-4f79-97a3-87da24c97f35"
            }
            alt="Photo blog"
            width={200}
            height={200}
            quality={100}
            className="w-full  h-[88px]  md:w-1/4  rounded-[8px] object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNw0hM6u295iJepIhsDg6O16fef35bP7o80YwAAdZUJpqVnlCUAAAAASUVORK5CYII="
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 ">
        {about_us_data.map((object, index) => (
          <div
            className="flex flex-row gap-4  p-4 items-center border-b border-black"
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

export default AboutUsModernSociety;
