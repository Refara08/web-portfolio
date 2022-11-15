import { useRouter } from "next/router";
import Link from "next/link";
import ArrowLeft from "../ui/jsx/arrow-left";
import ArrowRight from "../ui/jsx/arrow-right";

const NavArrow = ({ items }) => {
  const router = useRouter();
  const indexPage = items.findIndex((item) => item.link === router.pathname);

  if (router.pathname === "/portfolios/[slug]") {
    return (
      <div className={`py-6 container-default flex justify-start items-center`}>
        <Link href="/portfolios">
          <a className="flex items-center gap-3">
            <ArrowLeft size="2rem" />
            <h4>All portfolios</h4>
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`py-6 container-default flex ${
        indexPage === 0
          ? "justify-end"
          : indexPage === items.length - 1
          ? "justify-start"
          : "justify-between"
      } items-center`}
    >
      {indexPage !== 0 && (
        <Link href={items[indexPage - 1].link}>
          <a className="flex items-center gap-3">
            <ArrowLeft size="2rem" />
            <h4>{items[indexPage - 1].placeholder}</h4>
          </a>
        </Link>
      )}
      {indexPage !== items.length - 1 && (
        <Link href={items[indexPage + 1].link}>
          <a className="flex items-center gap-3">
            <h4>{items[indexPage + 1].placeholder}</h4>
            <ArrowRight size="2rem" />
          </a>
        </Link>
      )}
    </div>
  );
};

export default NavArrow;
