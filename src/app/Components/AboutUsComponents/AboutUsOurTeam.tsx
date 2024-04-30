import AboutUsOneMember from "./AboutUsOneMember";

const team = [
  {
    photo: "/bratislava1.jpg",
    name: "Andrej Pavol",
    description:
      "Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie, uložené ako obyčajný nosník.",
  },
  {
    photo: "/bratislava1.jpg",
    name: "Andrej Pavol",
    description:
      "Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie, uložené ako obyčajný nosník.",
  },
  {
    photo: "/bratislava1.jpg",
    name: "Andrej Pavol",
    description:
      "Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie, uložené ako obyčajný nosník.",
  },
];

const AboutUsOurTeam = () => {
  return (
    <div className="main_section bg-secondary">
      <p>[Náš tím]</p>
      <div className="flex flex-col md:flex-row gap-16">
        {team.map((one_member, index) => (
          <AboutUsOneMember
            photo={one_member.photo}
            name={one_member.name}
            description={one_member.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsOurTeam;
