import NavArrow from "./NavArrow";
import NavProgressBar from "./NavProgressBar";

const NewNav = ({ items, children }) => {
  return (
    <>
      <NavArrow items={items} />
      {children}
      <NavProgressBar items={items} />
    </>
  );
};

export default NewNav;
