import Head from "next/head";

import { getAllPost, getPostData } from "../../lib/post-utils";
import PorfolioDetails from "../../components/portfolio/PortfolioDetails";

const PortfolioDetailsPage = (props) => {
  return (
    <>
      <Head>
        <title>{`Gema Refantero | ${props.post.title}`}</title>
        <meta name="description" content={props.post.desc} />
      </Head>
      <PorfolioDetails post={props.post} />
    </>
  );
};

export default PortfolioDetailsPage;

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
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
