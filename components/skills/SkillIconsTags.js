const SkillIconsTags = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-start lg:items-center gap-12 lg:gap-16 mb-24">
      {categories.map((category) => (
        <div
          key={category.id}
          className="col-span-1 w-full hover:scale-105 transition duration-300 flex flex-row justify-start items-center gap-4 lg:gap-3"
        >
          <div className="w-[50px] h-[50px] flex items-center justify-start">
            <img src={category.icon.url} alt={category.title} />
          </div>
          <p className="text-xl">{category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillIconsTags;
