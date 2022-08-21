import SkillIcon from "./SkillIcon";

const SkillIcons = (props) => {
  const { icons } = props;

  return (
    <>
      <h1 className="mb-4">Made with:</h1>
      <div className="flex items-center justify-start gap-8 mb-12">
        {icons.map((item, index) => (
          <SkillIcon key={index} icon={item} />
        ))}
      </div>
    </>
  );
};

export default SkillIcons;
