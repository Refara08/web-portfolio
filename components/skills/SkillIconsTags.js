const SkillIconsTags = (props) => {
  const { icons } = props;
  return (
    <div className="grid grid-cols-3 gap-8 gap-y-12">
      {icons.map((icon) => (
        <div key={icon.tag} className="flex justify-start items-center gap-2">
          <div>{icon.jsx}</div>
          <p>{icon.tag}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillIconsTags;
