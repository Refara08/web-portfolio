import Link from "next/link";
import { useRouter } from "next/router";

const NavProgressBar = ({ items }) => {
  const router = useRouter();

  return (
    <div className="py-4 px-12">
      <nav className="container-default flex justify-evenly items-center gap-4">
        {items.map((item, index) => (
          <Link href={item.link} key={index}>
            <a className="block flex-1 py-4">
              <div
                className={`w-full bg-txt-prime transition duration-300 ${
                  router.pathname === item.link
                    ? "bg-opacity-100 h-[5px]"
                    : "bg-opacity-30 h-[3px]"
                }`}
              />
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavProgressBar;
