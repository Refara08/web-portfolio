import Image from "next/image";
import Link from "next/link";

import ButtonPrime from "../../components/ui/buttons/ButtonPrime";

import { useRouter } from "next/router";
// import ReactMarkdown from "react-markdown";

import { getAllPost } from "../../lib/post-utils";
import ButtonSecondary from "../../components/ui/buttons/ButtonSecondary";

const PorfolioDetailPage = (props) => {
  const router = useRouter();
  const slugPath = router.query.slug;

  const postData = props.posts.find((post) => {
    return post.slug === slugPath;
  });
  const { title, image, desc, slug, tags, website, github, content } = postData;

  const fullImagePath = image.replace(/\.png/, "-fullpage.png");

  return (
    <div className="grid grid-cols-2 gap-8 items-center mt-14">
      <div className="">
        <Image
          src={`/images/portfolios/${slug}/${fullImagePath}`}
          alt={title}
          width={"1050px"}
          height={"800px"}
          layout={"responsive"}
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-12">{title}</h1>
        <p className="mb-6">{desc}</p>
        <div className="flex justify-start items-center gap-4">
          <Link href={website} target={"_blank"}>
            <ButtonPrime>Visit Website</ButtonPrime>
          </Link>
          <Link href={github} target={"_blank"}>
            <ButtonSecondary>Review Code</ButtonSecondary>
          </Link>
        </div>
      </div>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      {/* <ReactMarkdown>{content}</ReactMarkdown> */}
    </div>
  );
};

export default PorfolioDetailPage;

export const getStaticProps = () => {
  const allPosts = getAllPost();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const allPosts = getAllPost();
  const slugAllPosts = allPosts.map((post) => {
    const paramObj = { params: { slug: post.slug } };
    return paramObj;
  });

  return {
    paths: slugAllPosts,
    fallback: "blocking",
  };
};
