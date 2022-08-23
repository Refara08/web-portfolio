const SkillIconsTags = (props) => {
  const { icons } = props;
  return (
    <div className="grid grid-cols-3 gap-8 gap-y-12">
      {icons.map((icon) => (
        <div
          key={icon.tag}
          className="flex flex-col md:flex-row justify-start items-center gap-4"
        >
          <div>{icon.jsx}</div>
          <p className="text-xl">{icon.tag}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillIconsTags;
