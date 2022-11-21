import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Experience from "./Experience";
import SkillIconsTags from "./SkillIconsTags";

const Skills = ({ skills }) => {
  const skillsRef = useRef();

  return (
    <div ref={skillsRef} id={"skills"} className="px-10 h-full pt-12 pb-32">
      <h1 className="text-4xl font-bold mb-12 uppercase tracking-widest">
        Skills & Experience
      </h1>
      <div className="">
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
        <div className="skills-section">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Skills;
