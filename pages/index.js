import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";

import { getAllPost } from "../lib/post-utils";

export default function Home(props) {
  return (
    <div>
      <Hero />
      <Portfolio portfolioList={props.posts} />
      {/* Projects */}

      <div className="scroller h-48" />
      {/* Features (ideas-design-code) */}

      {/* Aboutme Page */}

      {/* Detailed Project page */}
    </div>
  );
}

export const getStaticProps = () => {
  const allPosts = getAllPost();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
};
