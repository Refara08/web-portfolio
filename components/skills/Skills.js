import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Experience from "./Experience";
import SkillIconsTags from "./SkillIconsTags";

const Skills = ({ icons, categories }) => {
  const skillsRef = useRef();
  // const q = gsap.utils.selector(skillsRef);

  // useEffect(() => {
  //   q(".skills-section").forEach((card) => {
  //     gsap.fromTo(
  //       card,
  //       { y: 100, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 3,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: card,
  //           scrub: 1,
  //           once: true,
  //           start: "top bottom",
  //           end: "bottom bottom",
  //         },
  //       }
  //     );
  //   });
  // }, [q]);

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
          <SkillIconsTags icons={icons} categories={categories} />
        </div>
        <div className="skills-section">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Skills;
