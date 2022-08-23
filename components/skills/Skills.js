import SkillIconsTags from "./SkillIconsTags";

const Skills = (props) => {
  const { icons } = props;
  return (
    <div id={"skills"} className="my-40 px-10">
      <h1 className="text-4xl font-bold mb-12 uppercase tracking-widest">
        Skills & Experience
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="mb-4 text-2xl font-light tracking-widest">
            Experience
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            voluptatum possimus ea distinctio delectus dolore provident sequi
            nulla, expedita in! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias reiciendis aliquam consequuntur quos labore!
            Itaque eos deleniti dignissimos accusantium aut.
          </p>
        </div>
        <div>
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
