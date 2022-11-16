import Head from "next/head";
import Skills from "../components/skills/Skills";

import { getAllSkillIcons } from "../components/skills/skills-helper";
import { getCategories } from "../lib/get-contents";

const SkillsPage = ({ categories }) => {
  const allIcons = getAllSkillIcons();

  console.log(categories);

  return (
    <>
      <Head>
        <title>Gema Refantero | Services</title>
        <meta
          name="description"
          content="Services I offered as web designer and web developer"
        />
      </Head>
      <Skills icons={allIcons} categories={categories} />
    </>
  );
};

export default SkillsPage;

export const getStaticProps = async () => {
  const categories = (await getCategories()) || [];

  return {
    props: {
      categories,
    },
  };
};
