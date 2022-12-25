import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { getContentFragment } from "../../lib/get-contents";
import Experience from "./Experience";
import SkillIconsTags from "./SkillIconsTags";

const Skills = ({ skills, experiences, about }) => {
  const skillsRef = useRef();

  return (
    <div ref={skillsRef} id={"skills"} className="px-10 h-full pb-32">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 uppercase tracking-widest">
          About Me
        </h1>
        <div className="">
          {about.aboutMe.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-6 uppercase tracking-widest">
        Skills & Experience
      </h1>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
          {experiences.map((experience) => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </div>
        <div className="skills-section">
          <p className="mb-8 text-2xl font-light tracking-widest">
            Languages and Tools
          </p>
          <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-start lg:items-center gap-12 lg:gap-16 mb-24">
            {skills.map((skill) => (
              <SkillIconsTags skill={skill} key={skill.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
