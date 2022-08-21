import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/skills/Skills";

import { getAllPost } from "../lib/post-utils";
import { getAllSkillIcons } from "../components/skills/skills-helper";

export default function Home(props) {
  const allIcons = getAllSkillIcons();

  return (
    <div>
      <Hero />
      <Skills icons={allIcons} />
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
