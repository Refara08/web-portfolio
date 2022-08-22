import SkillIcons from "./SkillIcons";
import SkillIconsTags from "./SkillIconsTags";

const Skills = (props) => {
  const { icons } = props;
  return (
    <div id={"skills"} className="mt-40 px-10">
      <h1 className="text-4xl font-bold mb-2 uppercase tracking-widest">
        Skills
      </h1>
      <p className="mb-12 text-xl font-light tracking-widest">
        Languages and Tools
      </p>
      <SkillIconsTags icons={icons} />
    </div>
  );
};

export default Skills;
