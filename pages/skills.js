import Head from "next/head";
import Skills from "../components/skills/Skills";

import { getSkills } from "../lib/get-contents";

const SkillsPage = ({ skills }) => {
  return (
    <>
      <Head>
        <title>Gema Refantero | Services</title>
        <meta
          name="description"
          content="Services I offered as web designer and web developer"
        />
      </Head>
      <Skills skills={skills} />
      {/* about you */}
      {/* siapa gua? */}
      {/* experience */}
      {/* baru deh language */}
    </>
  );
};

export default SkillsPage;

export const getStaticProps = async () => {
  const skills = (await getSkills()) || [];

  return {
    props: {
      skills,
    },
  };
};
