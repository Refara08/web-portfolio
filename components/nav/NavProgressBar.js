import Link from "next/link";

const NavProgressBar = ({ items, indexPage }) => {
  return (
    <div className="py-2 lg:py-4 px-4 lg:px-12">
      <nav className="container-default flex justify-evenly items-center gap-4">
        {items.map((item, index) => (
          <Link href={item.link} key={index}>
            <a className="block flex-1 py-4">
              {
                <div
                  className={`w-full bg-txt-prime transition duration-300 ${
                    index === indexPage
                      ? "bg-opacity-100 h-[5px]"
                      : "bg-opacity-30 h-[3px]"
                  }`}
                />
              }
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavProgressBar;
