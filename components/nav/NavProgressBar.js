import ProgressBarOnly from "./ProgressBarOnly";

const NavProgressBar = ({ items, indexPage }) => {
  return (
    <div className="py-2 lg:py-4 px-4 lg:px-12">
      <nav className="container-default flex justify-evenly items-center gap-4">
        {items.map((item, index) => (
          <ProgressBarOnly
            item={item}
            index={index}
            indexPage={indexPage}
            key={index}
          />
        ))}
      </nav>
    </div>
  );
};

export default NavProgressBar;
