import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NewNav = ({ items }) => {
  const router = useRouter();
  // const [activePage, setActivePage] = useState("")

  useEffect(() => {
    console.log(router.pathname);
    // console.log(items)
  }, [router]);

  //pathname:
  //1. "/"
  //2. "/services" so on ...

  return (
    <nav className="py-6 px-12 flex justify-evenly items-center gap-4">
      <Link href="/">
        <a className="block flex-1 py-4">
          <div
            className={`w-full bg-txt-prime transition duration-300 ${
              router.pathname === "/"
                ? "bg-opacity-100 h-[4px]"
                : "bg-opacity-50 h-[3px]"
            }`}
          />
        </a>
      </Link>
      {items.map((item, index) => (
        <Link href={item.link} key={index}>
          <a className="block flex-1 py-4">
            <div
              className={`w-full bg-txt-prime transition duration-300 ${
                router.pathname === item.link
                  ? "bg-opacity-100 h-[4px]"
                  : "bg-opacity-50 h-[3px]"
              }`}
            />
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default NewNav;
