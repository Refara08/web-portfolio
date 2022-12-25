import { useRouter } from "next/router";
import Link from "next/link";
import ArrowLeft from "../ui/jsx/arrow-left";
import ArrowRight from "../ui/jsx/arrow-right";

const NavArrow = ({ items }) => {
  const router = useRouter();
  const indexPage = parseInt(
    items.findIndex((item) => item.link.includes(router.asPath))
  );
  const links = items.map((item) => item.link);
  const placeholders = items.map((item) => item.placeholder);
  const isMainPage =
    router.pathname.includes("/") ||
    router.pathname.includes("/services") ||
    router.pathname.includes("/skills") ||
    router.pathname.includes("/portfolios") ||
    router.pathname.includes("/contact");

  if (router.pathname === "/portfolios/[slug]") {
    return (
      <div className={`py-4 container-default flex justify-start items-center`}>
        <Link href="/portfolios">
          <a className="flex items-center gap-3">
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
        className={`py-4 container-default flex ${
          indexPage === 0
            ? "justify-end"
            : indexPage === items.length - 1
            ? "justify-start"
            : "justify-between"
        } items-center`}
      >
        {indexPage !== 0 && (
          <Link href={links[indexPage - 1]}>
            <a className="flex items-center gap-3">
              <ArrowLeft size="2rem" />
              <h4>{placeholders[indexPage - 1]}</h4>
            </a>
          </Link>
        )}
        {indexPage !== items.length - 1 && (
          <Link href={links[indexPage + 1]}>
            <a className="flex items-center gap-3">
              <h4>{placeholders[indexPage + 1]}</h4>
              <ArrowRight size="2rem" />
            </a>
          </Link>
        )}
      </div>
      // <div>words</div>
    );
  }
};

export default NavArrow;
