import Head from "next/head";
import Skills from "../components/skills/Skills";

import { getCategories } from "../lib/get-contents";

const SkillsPage = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Gema Refantero | Services</title>
        <meta
          name="description"
          content="Services I offered as web designer and web developer"
        />
      </Head>
      <Skills categories={categories} />
      {/* about you */}
      {/* siapa gua? */}
      {/* experience */}
      {/* baru deh language */}
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
