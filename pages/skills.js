import Head from "next/head";
import Skills from "../components/skills/Skills";

import { getAbout, getExperiences, getSkills } from "../lib/get-contents";

const SkillsPage = ({ skills, experiences, about }) => {
  return (
    <>
      <Head>
        <title>Gema Refantero | Services</title>
        <meta
          name="description"
          content="Services I offered as web designer and web developer"
        />
      </Head>
      <Skills skills={skills} experiences={experiences} about={about} />
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
  const experiences = (await getExperiences()) || [];
  const abouts = (await getAbout()) || [];

  return {
    props: {
      skills,
      experiences,
      about: abouts[0],
    },
  };
};
