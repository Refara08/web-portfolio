import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Experience from "./Experience";
import SkillIconsTags from "./SkillIconsTags";

const Skills = (props) => {
  const { icons } = props;

  const skillsRef = useRef();
  const q = gsap.utils.selector(skillsRef);

  useEffect(() => {
    q(".skills-section").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            scrub: 1,
            once: true,
            start: "top 70%",
            end: "bottom 50%",
          },
        }
      );
    });
  }, [q]);

  return (
    <div ref={skillsRef} id={"skills"} className="px-10 h-full pt-12">
      <h1 className="text-4xl font-bold mb-12 uppercase tracking-widest">
        Skills & Experience
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
        <div className="skills-section">
          <Experience />
        </div>
        <div className="skills-section">
          <p className="mb-8 text-2xl font-light tracking-widest">
            Languages and Tools
          </p>
          <SkillIconsTags icons={icons} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
