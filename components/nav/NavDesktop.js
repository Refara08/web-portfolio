import { useRouter } from "next/router";
import Link from "next/link";
import ArrowLeft from "../ui/jsx/arrow-left";
import ArrowRight from "../ui/jsx/arrow-right";
import ProgressBarOnly from "./ProgressBarOnly";

const NavDesktop = ({ items, indexPage, isMainPage }) => {
  const router = useRouter();
  const links = items.map((item) => item.link);
  const placeholders = items.map((item) => item.placeholder);

  if (router.pathname === "/portfolios/[slug]") {
    return (
      <div className={`py-4 container-default flex justify-start items-center`}>
        <Link href="/portfolios">
          <a className="flex items-center gap-3 hover:scale-110 origin-right transition duration-300">
            <ArrowLeft size="2rem" />
            <h4>All portfolios</h4>
          </a>
        </Link>
      </div>
    );
  }

  if (isMainPage) {
    return (
      <div
        className={`py-4 container-default flex gap-x-6 justify-between items-center`}
      >
        <Link href={indexPage !== 0 ? links[indexPage - 1] : links[0]}>
          <a
            className={`flex items-center gap-3 hover:scale-110 origin-right transition duration-300 ${
              indexPage === 0
                ? "opacity-0 cursor-default pointer-events-none"
                : "opacity-1"
            }`}
          >
            <ArrowLeft size="2rem" />
            <h4>{placeholders[indexPage - 1]}</h4>
          </a>
        </Link>
        <nav className="flex-[1] flex justify-evenly items-center gap-4">
          {items.map((item, index) => (
            <ProgressBarOnly
              item={item}
              index={index}
              indexPage={indexPage}
              key={index}
            />
          ))}
        </nav>
        <Link
          href={
            indexPage !== items.length - 1 ? links[indexPage + 1] : links[0]
          }
        >
          <a
            className={`flex items-center gap-3 hover:scale-110 origin-left transition duration-300`}
          >
            <h4>
              {indexPage !== items.length - 1
                ? placeholders[indexPage + 1]
                : placeholders[0]}
            </h4>
            <ArrowRight size="2rem" />
          </a>
        </Link>
      </div>
      // <div>words</div>
    );
  }
};

export default NavDesktop;
