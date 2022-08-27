const SkillIconsTags = (props) => {
  const { icons } = props;
  return (
    <div className="grid grid-cols-3 place-items-start lg:place-items-center gap-4 lg:gap-8 lg:gap-y-12">
      {icons.map((icon) => (
        <div
          key={icon.tag}
          className="scale-75 hover:scale-90 lg:scale-100 lg:hover:scale-110 transition duration-300 flex flex-col md:flex-row justify-start items-center gap-4"
        >
          <div>{icon.jsx}</div>
          <p className="text-xl">{icon.tag}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillIconsTags;
