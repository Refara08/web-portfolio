import { getContentFragment } from "../../lib/get-contents";

const Experience = ({ experience }) => {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-base font-semibold tracking-wider">
        {experience.period}
      </h2>
      <h3 className="mb-4 text-2xl font-light tracking-widest">
        {experience.jobPosition}
      </h3>
      {experience.experienceDesc.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </div>
  );
};

export default Experience;
