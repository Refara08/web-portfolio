import SkillIcons from "./SkillIcons";
import SkillIconsTags from "./SkillIconsTags";

const Skills = (props) => {
  const { icons } = props;
  return (
    <div id={"skills"} className="mt-40 px-10">
      <h1 className="text-3xl font-bold mb-12">Skills</h1>
      <SkillIconsTags icons={icons} />
    </div>
  );
};

export default Skills;
