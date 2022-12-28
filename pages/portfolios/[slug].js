import Head from "next/head";
import PorfolioDetails from "../../components/portfolio/PortfolioDetails";
import { getPostDetails, getPosts, getPostsSlug } from "../../lib/get-contents";

const PortfolioDetailsPage = ({ post, nextPost, previousPost }) => {
  return (
    <>
      <Head>
        <title>{`Gema Refantero | ${post.title}`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PorfolioDetails
        post={post}
        nextPost={nextPost}
        previousPost={previousPost}
      />
    </>
  );
};

export default PortfolioDetailsPage;

export const getStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = (await getPostDetails(slug)) || [];
  const postsSlug = (await getPostsSlug()) || [];
  const currentPostIndex = postsSlug.findIndex((item) => item.slug === slug);
  const nextPostIndex =
    currentPostIndex !== postsSlug.length - 1 ? currentPostIndex + 1 : 0;
  const previousPostIndex =
    currentPostIndex !== 0 ? currentPostIndex - 1 : postsSlug.length - 1;

  return {
    props: {
      post: postData,
      nextPost: postsSlug[nextPostIndex],
      previousPost: postsSlug[previousPostIndex],
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const posts = (await getPosts()) || [];
  const slugAllPosts = posts.map((post) => {
    const paramObj = { params: { slug: post.slug } };
    return paramObj;
  });

  return {
    paths: slugAllPosts,
    fallback: "blocking",
  };
};
