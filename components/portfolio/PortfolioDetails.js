import Image from "next/image";

import { getSpecificSkillsIcon } from "../../components/skills/skills-helper";

import SkillIcons from "../../components/skills/SkillIcons";
import ButtonSecondary from "../../components/ui/buttons/ButtonSecondary";
import ButtonPrime from "../../components/ui/buttons/ButtonPrime";

const PorfolioDetails = (props) => {
  const { title, image, desc, slug, tags, website, github, priority, content } =
    props.post;

  const madeWith = getSpecificSkillsIcon(tags);

  const fullImagePath = image.replace(/\.png/, "-fullpage.png");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-14 pb-28 px-8">
      <div className="">
        <Image
          src={`/images/portfolios/${slug}/${fullImagePath}`}
          alt={title}
          width={"1050px"}
          height={"800px"}
          layout={"responsive"}
          priority={priority ? priority : false}
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-12">{title}</h1>
        <p className="mb-6">{desc}</p>
        <SkillIcons icons={madeWith} />
        <div className="flex justify-start items-center gap-4 flex-wrap mt-20">
          <ButtonPrime href={website} target={"_blank"}>
            Visit Website
          </ButtonPrime>
          <ButtonSecondary href={github} target={"_blank"}>
            Review Code
          </ButtonSecondary>
        </div>
      </div>
      {/* <ReactMarkdown>{content}</ReactMarkdown> */}
    </div>
  );
};

export default PorfolioDetails;
