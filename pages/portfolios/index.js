import Head from "next/head";
import Portfolio from "../../components/portfolio/Portfolio";
import { getPosts } from "../../lib/get-contents";

const PortfoliosPage = (props) => {
  return (
    <>
      <Head>
        <title>Gema Refantero | Portfolios</title>
        <meta
          name="description"
          content="Some of my projects as frontend and fullstack developer"
        />
      </Head>
      <Portfolio portfolioList={props.posts} />
    </>
  );
};

export default PortfoliosPage;

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
};
