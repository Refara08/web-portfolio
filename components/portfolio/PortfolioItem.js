import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { title, image, slug, desc, tags } = props.portfolio;

  const detailPageLink = `/portfolios/${slug}`;
  const imageLink = `/images/portfolios/${slug}/${image}`;

  return (
    <li className="rounded-xl overflow-hidden bg-primary-2 hover:scale-105 active:scale-95 duration-300 cursor-pointer">
      <Link href={detailPageLink}>
        <a>
          <div>
            <div>
              <Image
                src={imageLink}
                alt={title}
                width={"300px"}
                height={"150px"}
                layout={"responsive"}
              />
            </div>
            <div className="p-6 pb-12 flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">{title}</h1>
              <ul className="flex gap-2">
                {tags.map((tag) => (
                  <li className="bg-white text-primary rounded-full text-xs font-bold py-1 px-2">
                    {tag}
                  </li>
                ))}
              </ul>
              <p>{desc}</p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PortfolioItem;
